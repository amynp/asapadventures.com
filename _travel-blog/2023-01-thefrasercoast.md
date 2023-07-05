---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/JVXVc_sm07jFVtYwgE50nqK705GEHd8450r9kY2th5sSY9jRQosDzYQ7Suhrzi-W5O5NzGKjZV7sBUALdK2-VEV__o5WM7kADexQ321jxnwMnva5wXtiJlFELxUmCDXmePcu_jmkjy8=w2400
title: The Fraser Coast 2023
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2023-the-fraser-coast reversed %}
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
