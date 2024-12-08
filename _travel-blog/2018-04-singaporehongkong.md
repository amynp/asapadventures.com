---
layout: front-page-template
bannerImage: http://photos-1.asapadventures.com/blogs/2018singaporehongkong/2018-04-05/IMG_8230.jpg_compressed.JPEG
title: Singapore / HongKong 2018
subHeading: This is one of my proudest trips it was just me and Anthony but I did this trip for under $2500 which I was pretty happy with.
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2018-singapore-hong-kong reversed %}
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
