---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/szHU97veFP1LM1U1xA8CV7ORxbHWNl-DMW8yGMMdnMARCj9J73tYx98IfiswT987VNlY4Z5oyLlqFjV7ZfyPruboQGqqAuK3QSyRMjP1phfn-4-7y97yshtDUL8bbAbxD09bdKXrwoc=w2400
title: My Travel Guides
subHeading: Welcome to our travel guides! Here we hope to provide you with day trips and guides to make your holiday the best. These guides have been written after we have experienced them to ensure they work. Please feel free to email me at 
asapadventurestravel@gmail.com
for any questions or trip planning. 
---

<div class="text-uppercase adventure-list experience">
  {% for country in site.travel-guides %}
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.{{ forloop.index }}s" data-wow-duration="1s">
      <a href="{{country.url | prepend: site.baseurl}}">
        <img src="{{ country.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <i class="icon icon-map"></i>
          <h5>{{ country.title }}</h5>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
