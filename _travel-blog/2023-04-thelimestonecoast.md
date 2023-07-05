---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/pw/AMWts8ARukstrKpwv2bFUuIWL1j0DHB-fGBCXu_fwdStzTM6lgD1fgqhg1TdZmqIZrlls-YNEhL66QqVmQU--wRZ4X5N66CRD9EV7bTQ_MecZUPd3lQU_9Ck=w2400
title: The Limestone Coast 2023
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2023-the-limestone-coast reversed %}
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
