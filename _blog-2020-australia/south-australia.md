---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/c-0bonY3Z6Rk5-oOcT9pPoGYmXQWlf1lqQHC61D0Gsw7b-YcjqW7Np4cGNTu2J67J0hllGAyOfjih2PInbYDiOOGKcZlrCx-nAFBhVIaQvKd9xUB4j--PJxMvx2_I_NWJ6JwTxceD74=w2400
title: South Australia
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2020-south-australia reversed %}
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
