---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/JltVBFGyDft9RVUu6K7JXNy1Z8QqU0stqffV6CWM1rNnUPdBlKoCVYYk_z07C9o8uh61IU-qAuGnRUHCnWHVYb5LJdDStFEDcr7HQfS7MLN9VLKpoANS7qxjAJQgTOsPmjK-O32Trw
title: Singapore / HongKong 2018
subHeading: 
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2018-singapore-hongkong %}
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
