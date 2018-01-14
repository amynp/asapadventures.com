---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/n6_Q0e_n0WtSa9lz7VI2bKNBq7-acsUimYI_Tsz30y5_4S0yICQRhZkec8cOFb01Et1zdzaeL4Skbak3jmommtnTYAFu21ZMY9XBs1qydKSm8PZw5BRu3sU1L1_3hvPsbMfYO8tXHQ
title: My Travel Blogs
subHeading: Join ASAPadventures on our trips around the world
---

{% for day in site.travelblog %}
  <div class="text-uppercase adventure-list experience">
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.{{ forloop.index }}s" data-wow-duration="1s">
      <a href="{{day.url | prepend: site.baseurl}}">
        <img src="{{ day.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-map"></i>
          <h5>{{ day.title }}</h5>
        </div>
      </a>
    </div>
  </div>
{% endfor %}
