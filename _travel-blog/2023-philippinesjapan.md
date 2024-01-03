---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/pw/ABLVV86xlUfv0qn2-Pu0-lXNxYTel-KO4emPsHfih0vlsXElcGAJa3SLsAuu_uylbUL4ooBDMy34IO8Jz97XSqNeqeH4_n5HgwyVcpzmfWmm18R5zvuS1fNH=w2400
title: Philippines and Japan 2023/2024
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2023-philippines-japan reversed %}
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
