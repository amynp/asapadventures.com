---
layout: front-page-template
bannerImage: /images/blogs/2016taiwanjapan/2016-01-03/IMG_3068.JPG_compressed.JPEG
title: Taiwan and Japan 2016/2017
subHeading: A multistep trip to see Taiwan and Japan. We travelled with 6 friends in Taiwan and then joined up with another 6 to make a huge group of 12. So much fun!
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2016-taiwan-japan reversed %}
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
