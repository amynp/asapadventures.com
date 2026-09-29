// World map renderer: highlights visited countries and draws named pins.
//
// Requires d3 and topojson-client to be loaded first.
//
// Usage:
//   renderWorldMap(document.getElementById('worldmap'), MAP_DATA)
//     .then(({ marked, total }) => ...);
//
// Options (third argument):
//   dataDir     directory holding countries-50m.json, marine-10m.json and
//               iso3166.json (default 'data')
//   detailZoom  non-capital pins appear once the zoom level exceeds this;
//               pins with capital: true are always visible (default 1,
//               i.e. any zoom-in shows everything)
//   centerLon   longitude at the horizontal centre of the map (default 0)
//   projection  one of the keys in WORLDMAP_PROJECTIONS
//               (default 'naturalEarth1')
//
// Styling hooks (set on the container or an ancestor):
//   --worldmap-land, --worldmap-land-hover, --worldmap-visited,
//   --worldmap-visited-hover, --worldmap-sea, --worldmap-pin,
//   --worldmap-pin-text, --worldmap-pin-halo

// Projections in the vendored d3 bundle that can draw the whole world.
const WORLDMAP_PROJECTIONS = {
  naturalEarth1: "Natural Earth",
  equalEarth: "Equal Earth",
  equirectangular: "Equirectangular",
  mercator: "Mercator (Google Maps)",
  transverseMercator: "Transverse Mercator",
  azimuthalEqualArea: "Azimuthal Equal Area",
  azimuthalEquidistant: "Azimuthal Equidistant",
  orthographic: "Orthographic (globe)",
  stereographic: "Stereographic",
  conicEqualArea: "Conic Equal Area",
  conicEquidistant: "Conic Equidistant",
};

async function renderWorldMap(container, mapData, options = {}) {
  const dataDir = options.dataDir ?? "/js/worldmap";
  const detailZoom = options.detailZoom ?? 1;
  const centerLon = options.centerLon ?? 0;
  const projectionName = options.projection ?? "naturalEarth1";
  const seaNames = mapData.seas ?? [];
  const [world, iso, subunits, marine] = await Promise.all([
    fetch(`${dataDir}/countries-50m.json`).then((r) => r.json()),
    fetch(`${dataDir}/iso3166.json`).then((r) => r.json()),
    fetch(`${dataDir}/subunits-50m.json`).then((r) => r.json()),
    seaNames.length ? fetch(`${dataDir}/marine-10m.json`).then((r) => r.json()) : null,
  ]);

  const subunitCodes = new Set(subunits.features.map((f) => f.properties.code));
  const visitedNums = new Set();
  const visitedSubunits = new Set();
  let marked = 0;
  // Subunit codes win over ISO codes: a country with a subunit entry
  // (e.g. metropolitan France) highlights only that shape, not the ISO
  // feature that bundles in overseas territories.
  for (const code of new Set(mapData.pins.map((p) => p.country))) {
    if (subunitCodes.has(code)) {
      visitedSubunits.add(code);
      marked++;
    } else if (iso[code]) {
      visitedNums.add(iso[code].num);
      marked++;
    } else {
      console.warn(`worldmap: unknown country code "${code}"`);
    }
  }

  const width = 960;
  const height = 500;
  const pinScale = 1.2;
  const projectionFactory = d3[`geo${projectionName[0].toUpperCase()}${projectionName.slice(1)}`];
  if (!(projectionName in WORLDMAP_PROJECTIONS) || typeof projectionFactory !== "function") {
    console.warn(`worldmap: unknown projection "${projectionName}", using naturalEarth1`);
  }
  const projection = (
    projectionName in WORLDMAP_PROJECTIONS && projectionFactory ? projectionFactory() : d3.geoNaturalEarth1()
  ).rotate([-centerLon, 0]);
  const countries = topojson.feature(world, world.objects.countries);
  projection.fitSize([width, height], countries);
  const geoPath = d3.geoPath(projection);

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("display", "block")
    .style("width", "100%")
    .style("height", "auto")
    .style("cursor", "grab");
  const g = svg.append("g");

  const style = getComputedStyle(container);
  const color = (name, fallback) => style.getPropertyValue(name).trim() || fallback;
  const land = color("--worldmap-land", "#2c3a4a");
  const landHover = color("--worldmap-land-hover", "#3d4f63");
  const visited = color("--worldmap-visited", "#35c26e");
  const visitedHover = color("--worldmap-visited-hover", "#4fdd88");

  // Seas render first so land paints on top of them.
  if (seaNames.length) {
    const wanted = new Set(seaNames.map((n) => n.toLowerCase()));
    const seaFeatures = marine.features.filter((f) => wanted.has(f.properties.name.toLowerCase()));
    for (const name of seaNames) {
      if (!seaFeatures.some((f) => f.properties.name.toLowerCase() === name.toLowerCase())) {
        console.warn(`worldmap: unknown sea "${name}"`);
      }
    }
    g.selectAll("path.sea")
      .data(seaFeatures)
      .join("path")
      .attr("class", "sea")
      .attr("d", geoPath)
      .attr("fill", color("--worldmap-sea", "#2e6edb"))
      .attr("fill-opacity", 0.55)
      .append("title")
      .text((d) => d.properties.name);
  }

  g.selectAll("path.country")
    .data(countries.features)
    .join("path")
    .attr("class", "country")
    .attr("d", geoPath)
    .attr("fill", (d) => (visitedNums.has(d.id) ? visited : land))
    .on("mouseenter", function (event, d) {
      d3.select(this).attr("fill", visitedNums.has(d.id) ? visitedHover : landHover);
    })
    .on("mouseleave", function (event, d) {
      d3.select(this).attr("fill", visitedNums.has(d.id) ? visited : land);
    })
    .append("title")
    .text((d) => d.properties.name);

  // Subunits (e.g. the UK's constituent countries) draw over their parent
  // country so each can highlight and name itself independently.
  g.selectAll("path.subunit")
    .data(subunits.features)
    .join("path")
    .attr("class", "subunit")
    .attr("d", geoPath)
    .attr("fill", (d) => (visitedSubunits.has(d.properties.code) ? visited : land))
    .on("mouseenter", function (event, d) {
      d3.select(this).attr("fill", visitedSubunits.has(d.properties.code) ? visitedHover : landHover);
    })
    .on("mouseleave", function (event, d) {
      d3.select(this).attr("fill", visitedSubunits.has(d.properties.code) ? visited : land);
    })
    .append("title")
    .text((d) => d.properties.name);

  const pins = g
    .selectAll(".pin")
    .data(
      mapData.pins.map((p) => {
        const [x, y] = projection([p.lon, p.lat]);
        return { ...p, x, y };
      }),
    )
    .join("g")
    .attr("class", "pin")
    .attr("transform", (d) => `translate(${d.x},${d.y}) scale(${pinScale})`)
    .attr("display", (d) => (d.capital ? null : "none"));
  pins
    .append("circle")
    .attr("r", 3)
    .attr("fill", color("--worldmap-pin", "#ff5a5f"))
    .attr("stroke", "#fff")
    .attr("stroke-width", 1);
  pins
    .append("text")
    .attr("x", (d) => (d.align === "left" ? -5 : 5))
    .attr("y", 2)
    .attr("text-anchor", (d) => (d.align === "left" ? "end" : "start"))
    .attr("font-size", 9)
    .attr("font-family", "system-ui, sans-serif")
    .attr("fill", color("--worldmap-pin-text", "#e8edf2"))
    .attr("stroke", color("--worldmap-pin-halo", "#0f1a26"))
    .attr("stroke-width", 2.5)
    .attr("paint-order", "stroke")
    .text((d) => d.name);

  // Wheel-zoom + drag-pan; pins counter-scale to a constant screen size.
  // Capitals show at every zoom; the rest appear once zoom exceeds detailZoom.
  svg.call(
    d3
      .zoom()
      .scaleExtent([1, 30])
      .on("zoom", (event) => {
        const k = event.transform.k;
        g.attr("transform", event.transform);
        g.selectAll(".pin")
          .attr("transform", (d) => `translate(${d.x},${d.y}) scale(${pinScale / k})`)
          .attr("display", (d) => (d.capital || k > detailZoom ? null : "none"));
      }),
  );

  return { marked, total: 195, pins: mapData.pins.length };
}
