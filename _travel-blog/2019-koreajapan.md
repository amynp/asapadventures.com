---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/90g2wPvnqCU3i6MZubhWmTqlnO1cf_jQm4Zm1jqW0ZoWBSxHKfHY31qn5fSA48aVu3DZiKfebcj_Q_OOpsg7g_5-9U4q7RALEENLPYSJR9aDjT95DpHcSFXUhL9dvv40c_mGYyIGNLM=w2400
title: Korea and Japan 2019
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2019-korea-japan %}
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
