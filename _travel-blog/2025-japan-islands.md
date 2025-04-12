---
layout: front-page-template
bannerImage: /images/blogs/2025japanislands/2025-04-12/PXL_20250412_005937821.jpg_compressed.JPEG
title: Japan Islands 2025
subHeading: A short trip to Hong Kong, Japan and a cruise to Okinawa and Taiwan. 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2025-japan-islands reversed %}
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
