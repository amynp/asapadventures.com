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
    location: Hiroshima, Japan
    blog: /travelblog/2016taiwanjapan/2016-01-06/
    image: https://lh3.googleusercontent.com/aJVuszO1_j1wXq4XVqME2nZcdJu-OC7nCsn8BINrEB_k6KtrymUi8Kzebe6Rpo3NebxHyadA-vM5jguSYcH252rvto5FeWBDcumSUuGBirsBD4JiLpp6tWAi79pbKJAa3_50YCd14kg=w2400

  - name: Itsukushima Shinto Shrine
    date: 2016-01-06
    location: Miyajima, Japan
    blog: /travelblog/2016taiwanjapan/2016-01-06/
    image: https://lh3.googleusercontent.com/vBXOQlzwD304ZF_a7GidQd3efvyR0_EzoSB5TRm3n83CeRvXHTyq1D29I_kw2idc_i_-JwQrrz0kqBscJBs2dVYC8qwhSUcbHRDOSTDY8RdkYkojwNdTySgEOmZSn24JbnEd3X4qPKc=w2400

  - name: Historic Monuments of Ancient Nara
    date: 2018-10-02
    location: Nara, Japan
    blog: /travelblog/2018japan/2018-10-02/
    image: https://lh3.googleusercontent.com/m6JW71XY1xBW-9Tcpjs6xtrL06QFDpWXaBkXyDgAO7BoqMjbxDVYoKLeCNHhFabB8rks81g4zD0zsNdQeimNg0UlTmpNeAWCSMHP6IGqjvY9NnbkjQbvH6qb4iLQBLJys7Sm78DHbr4=w2400

  - name: Te Wahipounamu – South West New Zealand
    date: 2017-04-07
    location: South West Area, New Zealand
    blog: /travelblog/2017newzealand/2017-04-07/
    image: https://lh3.googleusercontent.com/5gl8A0hp3LFFJJx7R_OQNOpFmqhtNBf4UuSD1vET-xCu6_AhNe0KDUH0iARB3x8JycbtKnuA04VxFUY_0i3AjxVhTTgp3v5s4La1dfJraDRbVW7ONEt6sBx45rVSk_KUyEuSmy34HzY=w2400
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
