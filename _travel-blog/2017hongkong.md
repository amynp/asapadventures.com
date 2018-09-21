---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/c9WTI6nLdI0t27urgJ6AH85tNfID56HNlXo3MsFsuAAjgPNOhtrbAAe6pBf8kPR9WIrCXiO_OQfqaPTHh_Eqpw4SiAqZ23GmBhx-7yU5Qe48B20VPklGACmG6yXNTyHoKBaEPjwZIQ=w2400
title: Hong Kong 2017
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2017-hong-kong %}
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
