---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/TU9LzuWauUyubfZKHO3mB5-RbvbK3cn3JBxSdDelWqvz5RYcI7VNjcRt7dXPsKz4jwRBEgaNnqQj-JNZkdHFAFb43Cu4fazWo37Bp9aVujShfEIOw0nrC5SvVF9qC9sxPWfTtBArug
title: Singapore and Malaysia 2011/2012
subHeading: Anthony, Steve and I decided to go and visit our friend Sarma in Malaysia. We decided to extend the holiday and explore Singapore all together before spending time in Malaysia. It was a great trip with a stay in 2 amazing hotels.
---

{% for day in site.singaporemalaysia2012 %}
  <div class="text-uppercase adventure-list experience">
    <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.1s" data-wow-duration="1s">
      <a href="{{day.url | prepend: site.baseurl}}">
        <img src="{{ day.bannerImage }}"  alt="" class="img-responsive">
        <div class="overlay-lnk text-uppercase text-center">
          <h5>{{ day.title }}</h5>
        </div>
      </a>
    </div>
  </div>
{% endfor %}
