---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/oeS_VgYKwuJnTEPIcdBTv5VJHJzf9oaVWrWnZqgAuJ1awl7k2d5Bb_FDdP2Vi0mTun-X3OJdmgd342g_6_BqgAmM0La4yBo7lGaRk-RWsgDPOROb5c7pNV4j_lguIUdxclXeUJx4-Q
title: New Zealand 2015
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2015-new-zealand %}
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
