---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/n6_Q0e_n0WtSa9lz7VI2bKNBq7-acsUimYI_Tsz30y5_4S0yICQRhZkec8cOFb01Et1zdzaeL4Skbak3jmommtnTYAFu21ZMY9XBs1qydKSm8PZw5BRu3sU1L1_3hvPsbMfYO8tXHQ
title: UNESCO World Heritage Sites
subHeading: Join ASAPadventures on our trips around the world


done:
  - name: Eat a bento box on a Shinkansen
    date: 2016-01-06
    location: Hakone, Japan
    blog: /travelblog/2016taiwanjapan/2016-01-06
    image: https://lh3.googleusercontent.com/5ICc2H2NwyDlFmJs_QGjkzeFu9S5OfUq-nNP8H-pUx_oAfwE0tufs9UvO5e7AXaFnzieM0GpXKUURLh3Q-Z7ulZBfVAPsI6DFf96vhTePso0Mz3GHYlYK3gUeDmYP9X6dGem8Q3x_Q

  -

todo:
  - name: Swim with a platypus
---

<div class="row">
  <div class="text-uppercase adventure-list experience">
    <h1 class="animated fadeInUp" style="padding-top: 50px">Done</h1>
    {% assign dones = page.done | sort: 'date' %}
    {% for done in dones reversed %}
      <div class="col-md-6 col-sm-6 animated fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
        <a href="{{ done.blog }}">
          <img src="{{ done.image }}" alt="adventure-image" class="img-responsive">
          <div class="overlay-lnk text-uppercase text-center">
            <i class="icon icon-target"></i>
            <h5>{{ done.name }}</h5>
            <h6>{{ done.location }}<br/>{{ done.date }}</h6>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</div>

<div class="row">
  <div class="text-uppercase adventure-list experience">
    <h1 class="animated fadeInUp" style="padding-top: 50px">Todo</h1>
    {% assign todos = page.todo | sort: 'name' %}
    {% for todo in todos %}
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
