---
layout: front-page-template
bannerImage: /images/2015newzealand/2015-04-05/IMG_1458.JPG_compressed.JPEG
title: New Zealand 2015
subHeading: A duo short trip over to our neighbours in New Zealand. We went mainly to see Hobbiton. 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2015-new-zealand reversed %}
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
