---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/fxcg_YYLEC7asHtYkP3ew-YCAN1R4YhenUdzi5e5MYz6bvVbClUEp3s3tJdOlAnDhNrqk90u0EhcbfRSab0DbjR28KK6On3Dhud_O0SuIE_9K-SXGnXdK_3_FI7S5aSxYEUKYaZAIA
title: Singapore / HongKong 2018
subHeading: 
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2018-singapore-hongkong %}
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
