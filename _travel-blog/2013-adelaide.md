---
layout: front-page-template
bannerImage: /images/blogs/2013adelaide/2013-03-26/5.1367186770.3-panda-edited.jpg_compressed.JPEG
title: Adelaide 2013
subHeading: Anthony, Steve, Sarma and I took a road trip to Adelaide to see the Pandas. They are so cute.
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2013-adelaide reversed %}
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
