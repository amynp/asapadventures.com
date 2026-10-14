---
layout: front-page-template
bannerImage: http://photos-1.asapadventures.com/blogs/2018japan/2018-09-30/IMG_9414.jpg_compressed.JPEG
title: My Travel Guides
subHeading: Welcome to our travel guides! Here is our collection of travel guides as I have planned them. Hopefully they may help some of you plan a trip.
---

<div class="text-uppercase adventure-list experience">
  {% for country in site.travel-guides %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.{{ forloop.index }}s" data-wow-duration="1s">
      <a href="{{country.url | prepend: site.baseurl}}">
        <img src="{{ country.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-map"></i>
          <h5>{{ country.title }}</h5>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
