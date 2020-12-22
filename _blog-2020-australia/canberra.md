---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/O7leLVY-ijhw-m6e04cMZyJch1G4mND8X8LluOB_PZo9N_IkxsWCXQAdi9UANWH5LgmfcGO1xGe7iJJ5YT8VLRY8tnu4A-zeTRvKvJaLRMMW8G1OCCxTzzAeKObFQ99vgLm9BbspIxE=w2400
title: Canberra
subHeading: 
skipfeed: true
---

<div class="text-uppercase adventure-list experience">
  {% for day in site.blog-2020-canberra reversed %}
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
