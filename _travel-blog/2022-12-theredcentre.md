---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/RvW4VONV7hLEfGDpeNNcJkq6uVRr98Bzm4PnwyDPSyHvoIcif5EJajN01EWXbPNQKmaAuAga8hQQDX7rFvgoMVAAEITlMD1z95OXKi7R8of1Vt6sLouS-UOw7pcT0kzy7qIcM5CxCwU=w2400
title: The Red Centre 2022
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2022-the-red-centre reversed %}
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
