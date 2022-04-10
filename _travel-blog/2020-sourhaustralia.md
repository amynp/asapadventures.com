---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/C3lPYEDTr1blBCkSidZIc32Agyd39Hg0LL9GFnX3TPe4onCEWSobxR_EN1ka5HgNVlr1351Xzje2H16TvHTcKBm7eR_DDhibYmaVDIUyzOmtaV_QBBabpj-818Y8eGI4bmB8QAjzb98=w2400
title: South Australia 2020/2021
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2020-south-australia reversed %}
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
