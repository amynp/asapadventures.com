---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/OVAIqgkbAz8xleDfx_SnK6ozz9ygbaCVBDJGG5eu6P48Rx9DWujOu8kWZhXujnghie_429z_U0HnHm1jpbbStae3deJyj0GSX7e9ABPm_pkUjie9qnJ_-HMmbTtiM_fB4E95ZLRspw=w2400
title: Singapore / HongKong 2018
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2018-singapore-hong-kong %}
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
