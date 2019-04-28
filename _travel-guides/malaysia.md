---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/9O0SrUCsBvTWO0HdbEJ1HMpspp9lQRaq8HuL2aHU0o0Hwy2xMGTLNiBb6zHMwLatkE9t8EUHp1LyxMEabxlaRVN1D3Q3JCrypRPN7wm1toxKOhMvBXtqwFCI6uGhjo2aRlHW3UzEF2I=w2400
subHeading:
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for area in site.guide-malaysia %}
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
