---
layout: front-page-template
bannerImage: /images/blogs/2025srilanka/27-12-2025/IMG_1827.jpg_compressed.JPEG
title: Asia and Srilanka 2025
subHeading: A trip to Srilanka with a couple of places along the way. 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2025-srilanka reversed %}
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
