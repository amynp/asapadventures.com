---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/Y-BBXbR1mv9Qx8_OAT8SmWnXubbDw8GfDbV_rEDLqfWgMIi1hqyE8HAI0DBZS3jrqAuKPPQouv2UnKuO1PH7yOLw8-OG6_Fc8bdP7X0D8jyLEgDcTgePTA4ERZn7KxItZ7qVD7khEL4=w2400
subHeading:
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for area in site.guide-australia %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
      <a href="{{area.url | prepend: site.baseurl}}">
        <img src="{{ area.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-streetsign"></i>
          <h5>{{ area.title }}</h5>
          <h6>{{ area.subHeading }}</h6>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
