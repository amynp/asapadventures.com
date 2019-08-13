---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/n6_Q0e_n0WtSa9lz7VI2bKNBq7-acsUimYI_Tsz30y5_4S0yICQRhZkec8cOFb01Et1zdzaeL4Skbak3jmommtnTYAFu21ZMY9XBs1qydKSm8PZw5BRu3sU1L1_3hvPsbMfYO8tXHQ
title: UNESCO World Heritage Sites
subHeading: Join ASAPadventures on our trips around the world

visited:
  - name: Historic Monuments of Ancient Kyoto
    date: 2018-10-03
    location: Kyoto, Japan
    blog: /travelblog/2018-09-japan
    image: https://lh3.googleusercontent.com/UYXgj1pQkzGmgB7PNnLsEfLtKE8srJaFGbHR4iWFy4RhT0jmWTMkXZGswnpDo97UP2fUt1ekiyVM5GMiOQ08Fx-L7hU4XiI5mf2U-i_aZMas4xailCwXljuzB9hqf0OvjQXblGGaCYQ=w2400

  - name: Hiroshima Peace Memorial
    date: 2016-01-06
    location: Hiroshima Japan
    blog: /travelblog/2016taiwanjapan/2016-01-06/
    image: https://lh3.googleusercontent.com/aJVuszO1_j1wXq4XVqME2nZcdJu-OC7nCsn8BINrEB_k6KtrymUi8Kzebe6Rpo3NebxHyadA-vM5jguSYcH252rvto5FeWBDcumSUuGBirsBD4JiLpp6tWAi79pbKJAa3_50YCd14kg=w2400
---

<div class="row">
  <div class="text-uppercase adventure-list experience">
    <h1 class="animated fadeInUp" style="padding-top: 50px">Visited</h1>
    {% assign visiteds = page.visited | sort: 'date' %}
    {% for visited in visiteds reversed %}
      <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
        <a href="{{ visited.blog }}">
          <img src="{{ visited.image }}" alt="adventure-image" class="img-responsive">
          <div class="overlay-lnk text-uppercase text-center">
            <i class="icon icon-compass"></i>
            <h5>{{ visited.name }}</h5>
            <h6>{{ visited.location }}<br/>{{ visited.date }}</h6>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
