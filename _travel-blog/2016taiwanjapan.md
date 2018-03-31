---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/xPzJEoAiq4TPFHPlvo20IFHXXtFLS-1RjPg9KqE3ZVSwRCXRoejFggRntSyuQmhIfciwYW3Y-_mFWe7L44aKi_08Un1w-lNU7KWgCVDhYTr6k8Ygi461ktrMsIHs8mSfTRzxWPpL7Q=w2400
title: Taiwan and Japan 2016/2017
subHeading: 
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2016-taiwan-japan %}
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
