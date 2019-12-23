---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/fuU2ssIKAo6k4MrvKbyhMb5dexjBgQJvZ3hmNhGHQOJk4-VQlcHzMHPe6Tz_lZlUKvvgb8ZRsiCNOJPu5H1Z3FHxlYSoF84N4SptzatAKkvxC-CvZekoDV3NETCAmNOCwOjg21Ry8Q
title: Singapore and Hong Kong 2013/2014
subHeading: This was our first overseas trip just the two of us. Hong Kong was difficult for the first few days until you got use to the bustle, the smells and it being nowhere near as clean as Singapore. In the end Hong Kong grew on us. It was also our first trip to Hong Kong Disneyland which I completely fell in love with. 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2014-hong-kong reversed %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
      <a href="{{day.url | prepend: site.baseurl}}">
        <img src="{{ day.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-streetsign"></i>
          <h5>{{ day.title }}</h5>
          <h6>{{ day.subHeading }}</h6>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
