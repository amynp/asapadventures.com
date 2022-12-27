---
layout: front-page-template
bannerImage: https://www.worldhistory.org/img/r/p/500x600/10131.jpg?v=1635275703
title: The Red Centre 2022
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2022-the-red-centre reversed %}
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
