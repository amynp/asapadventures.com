---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/UX6UmcrgsdZDz76uJTiCreL9K3O_Jao1FWZCVgOS1YATgTp-AkT4D-XNk1BxmeFjFhRbNPaZC6jGVSOr403v9Myzf5DELkpXAj6GwHBKlLOY9I9jvztnYWF0D7n99oa6Y1mD5-UhdjU=w2400
title: Australia 2020/2021
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2020-australia %}
    {% if day.layout == 'front-page-template' %}
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
    {% endif %}
  {% endfor %}
</div>
