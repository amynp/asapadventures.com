---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/n6_Q0e_n0WtSa9lz7VI2bKNBq7-acsUimYI_Tsz30y5_4S0yICQRhZkec8cOFb01Et1zdzaeL4Skbak3jmommtnTYAFu21ZMY9XBs1qydKSm8PZw5BRu3sU1L1_3hvPsbMfYO8tXHQ
title: My Bucket List
subHeading: Join ASAPadventures on our trips around the world


done:
  - name: look confused
    date: 1/18/2018
    location: At home
    blog: /travelblog/2010japan/2010-01-05
    image: https://lh3.googleusercontent.com/mcaTfOOwoyNS6s_B4m72K83DC6xz_1kMDBkSyvFmqY5Fril4facF6jqI-kejRxzXdNH3x1EVDtiJRkSWzMGHenCfk2UWO1w5JREfBkAfSb7vZrpD7TsgPDVXeEFj3Iskhz5X_w

  - name: stare blankly
    date: 1/18/2018
    location: At home
    blog: /travelblog/2010japan/2010-01-07
    image: https://lh3.googleusercontent.com/mcaTfOOwoyNS6s_B4m72K83DC6xz_1kMDBkSyvFmqY5Fril4facF6jqI-kejRxzXdNH3x1EVDtiJRkSWzMGHenCfk2UWO1w5JREfBkAfSb7vZrpD7TsgPDVXeEFj3Iskhz5X_w

  - name: write a bucketlist
    date: 1/18/2018
    location: At home
    blog: /travelblog/2010japan/2010-01-09
    image: https://lh3.googleusercontent.com/mcaTfOOwoyNS6s_B4m72K83DC6xz_1kMDBkSyvFmqY5Fril4facF6jqI-kejRxzXdNH3x1EVDtiJRkSWzMGHenCfk2UWO1w5JREfBkAfSb7vZrpD7TsgPDVXeEFj3Iskhz5X_w


todo:
  - name: ride a tiger
  - name: fart lightning
  - name: eat fire
---

<div class="row">
  <div class="text-uppercase adventure-list experience">
    <h1 class="animated fadeInUp" style="padding-top: 50px">Done</h1>
    {% for done in page.done %}
      <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
        <a href="{{ done.blog }}">
          <img src="{{ done.image }}" alt="adventure-image" class="img-responsive">
          <div class="overlay-lnk text-uppercase text-center">
            <i class="icon icon-target"></i>
            <h5>{{ done.name }}</h5>
            <h6>{{ done.location }} ({{ done.date }})</h6>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<div class="row">
  <div class="text-uppercase adventure-list experience">
    <h1 class="animated fadeInUp" style="padding-top: 50px">Todo</h1>
    {% for todo in page.todo %}
      <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
        <a href="#">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEOByYCYni6JwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAADUlEQVQI12OYNm3afwAGSgLC16IAKQAAAABJRU5ErkJggg==" alt="adventure-image" class="img-responsive" >
          <div class="overlay-lnk text-uppercase text-center">
            <i class="icon icon-lightbulb"></i>
            <h5>{{ todo.name }}</h5>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
