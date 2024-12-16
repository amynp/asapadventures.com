---
layout: front-page-template
bannerImage: http://photos-2.asapadventures.com/blogs/2023philippinesjapan/2023-12-31/PXL_20231231_031928425.jpg_compressed.JPEG
subHeading:
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for area in site.guide-japan %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
      <a href="{{area.url | prepend: site.baseurl}}">
        <img src="{{ area.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-streetsign"></i>
          <h5>{{ area.title }}</h5>
          <h6>{{ area.subHeading }}</h6>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
