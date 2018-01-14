---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/fuU2ssIKAo6k4MrvKbyhMb5dexjBgQJvZ3hmNhGHQOJk4-VQlcHzMHPe6Tz_lZlUKvvgb8ZRsiCNOJPu5H1Z3FHxlYSoF84N4SptzatAKkvxC-CvZekoDV3NETCAmNOCwOjg21Ry8Q
title: Singapore and Hong Kong 2013/2014
subHeading: This was our first overseas trip just the two of us. It was great. 
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2014-hong-kong %}
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
