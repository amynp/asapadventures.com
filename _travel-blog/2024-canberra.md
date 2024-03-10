---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/pw/AP1GczP_gFtNESzJZXdQAzY-cKZRa5nlTSaP3jXllFRrSFZC803vPydX3EVCrNS7b_ItsbHgsuwtUQzQOrdBT5yaLjCL7R9Ig0gRjn-ompuePXqc_5TyoGzY=w2400
title: Canberra 2024
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2024-canberra reversed %}
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
