---
layout: front-page-template
bannerImage: /images/banner/20221231213652_IMG_0023.jpg_compressed.JPEG
bannerImages:
  - /images/banner/20120107193458.jpg_compressed.JPEG
  - /images/banner/20190923140253_IMG_1986.jpg_compressed.JPEG
  - /images/banner/20191224201616_IMG_3559~2.jpg_compressed.JPEG
  - /images/banner/DSC_0191.jpg_compressed.JPEG
  - /images/banner/DSC_1165-EFFECTS.jpg_compressed.JPEG
  - /images/banner/IMG_0294.jpg_compressed.JPEG
  - /images/banner/IMG_1743.jpg_compressed.JPEG
  - /images/banner/IMG_5683.jpg_compressed.JPEG
  - /images/banner/IMG_8946.jpg_compressed.JPEG
  - /images/banner/P1020717.jpg_compressed.JPEG
  - /images/banner/PXL_20211106_025537743.jpg_compressed.JPEG
  - /images/banner/PXL_20240703_013357398.jpg_compressed.JPEG
title: My Travel Blogs
subHeading: Join ASAPadventures on our trips around the world
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.travel-blog reversed %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.{{ forloop.index }}s" data-wow-duration="1s">
      <a href="{{day.url | prepend: site.baseurl}}">
        <img src="{{ day.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-map"></i>
          <h5>{{ day.title }}</h5>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
