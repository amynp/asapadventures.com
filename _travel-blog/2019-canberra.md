---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/qxLohTTKp_SDQekQOimbQODlwo3SbFo3J1zK8XTuXPKfBOhZ2CdgsCwv5teKoVuqxFdbev53qrAWLp7gt1h2IFsUgs5OiJ92dVJdT_oYaqSm2o7pND-VlyGGzDsbq5jAW0XAJ_muSqM=w2400
title: Canberra 2019
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2019-canberra reversed %}
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
