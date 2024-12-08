---
layout: front-page-template
bannerImage: http://photos-1.asapadventures.com/blogs/2017newzealand/2017-04-07/IMG_6389.JPG_compressed.JPEG
title: New Zealand 2017
subHeading:
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2017-new-zealand reversed %}
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
