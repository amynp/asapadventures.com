---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/no_-Joks4qa5Hlg6Pw2hbljp1SOGW14h_YJrYXYc1ULaE7w_KVTZ5Ev4Gy1b8HTwDAo-TrHj1AI1kcgeTja9P6peNohKoMPxY5DFqJCYSe-dCZ0QyOChrg6aoxwycwRX5CD27scc9Q=w2400
title: Osaka and Kyoto 2018
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2018-japan %}
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
