---
layout: front-page-template
bannerImage: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F39%2F75139-050-50AF4F76%2FElephants-Sri-Lanka.jpg&f=1&nofb=1&ipt=d4ed980867b25fc0976e5d15f4ba203b19e237bf729f49ea2e59ccfb89e0b6ba
title: Asia and Srilanka 2025
subHeading: A trip to Srilanka with a couple of places along the way. 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2025-srilanka reversed %}
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
