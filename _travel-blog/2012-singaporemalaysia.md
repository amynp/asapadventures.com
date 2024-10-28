---
layout: front-page-template
bannerImage: /images/2012singaporemalaysia/2011-12-31/IMG_5158.JPG_compressed.JPEG
title: Singapore and Malaysia 2011/2012
subHeading: Anthony, Steve and I decided to go and visit our friend Sarma in Malaysia. We decided to extend the holiday and explore Singapore all together before spending time in Malaysia. It was a great trip with a stay in 2 amazing hotels.
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2012-singapore-malaysia reversed %}
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
