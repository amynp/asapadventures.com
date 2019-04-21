---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/Y4Vkdif4zL72J9L1NfhHOInozpIDrcgYZgBSmYyF27qNWSuZaMdP2jhOGNk5YYuHfHsjJMxz81-_R4M2sChc0K4dek1jXv2Yq4EBnX2gE3N_CstA2p42WTiVwF6AxSe4Ir3w2g
title: Japan
subHeading: something someting darkside
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
