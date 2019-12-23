---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/0TGnL5YfkXkYmjZ8M-NJ8cvug8bKkRk6O01Xt3-mPnAgkZui9veBaJzY3r4K3bKJHGGJBfaTaRzjP3GWxZgoLmzYaa0G_7dI07oaF-ELClmlWarzy-ISy5RPOkktxYIY06pTN4EUYg
title: Adelaide 2013
subHeading: Anthony, Steve, Sarma and I took a road trip to Adelaide to see the Pandas. They are so cute.
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2013-adelaide reversed %}
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
