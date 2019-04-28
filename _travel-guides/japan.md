---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/oXKNvUu2fQkpDXUdbs30ope9bwSwNSXxcaA_Vyt0si5atd9gnQpvAUTqtH8rRZh_w0vsPUVD0aw1O137-y1EzzOTDA62hEmC6lMkZGx4w7HHVLiwb1IGs5enX8Is8VBZ0Zg8j0jQQ9s=w2400
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
