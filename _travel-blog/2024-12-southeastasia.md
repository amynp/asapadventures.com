---
layout: front-page-template
bannerImage: /images/blogs/southeastasia2024/2024-12-26/PXL_20241226_110511348.PANO.jpg_compressed.JPEG
title: South East Asia 2024/2025
subHeading: Join just the two of us as we explore Bali, Singapore, a cruise to Penang and Phuket and lastly a trip to Cambodia. It should be a fun time.
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2024-southeastasia reversed %}
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
