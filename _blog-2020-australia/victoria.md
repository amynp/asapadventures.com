---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/RcovQ7LYfJWkjWq_o78oN3MkUDYHBQse_3hH6LvLs-q2CULqJBB-xiTrzf2RpjV27lNsqghpsYsrRHnClFmB3K1UaHDgeW84_RTqvFNevwzu36VAU-EvEjEDtQg-UtAwhhxagi7IWXs=w2400
title: Victoria
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2020-victoria reversed %}
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
