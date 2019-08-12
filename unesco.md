---
layout: front-page-template
bannerImage: https://lh3.googleusercontent.com/n6_Q0e_n0WtSa9lz7VI2bKNBq7-acsUimYI_Tsz30y5_4S0yICQRhZkec8cOFb01Et1zdzaeL4Skbak3jmommtnTYAFu21ZMY9XBs1qydKSm8PZw5BRu3sU1L1_3hvPsbMfYO8tXHQ
title: UNESCO World Heritage Sites
subHeading: Join ASAPadventures on our trips around the world

visited:
  - name: Eat a bento box on a Shinkansen
    date: 2016-01-06
    location: Hakone, Japan
    blog: /travelblog/2016taiwanjapan/2016-01-06
    image: https://lh3.googleusercontent.com/5ICc2H2NwyDlFmJs_QGjkzeFu9S5OfUq-nNP8H-pUx_oAfwE0tufs9UvO5e7AXaFnzieM0GpXKUURLh3Q-Z7ulZBfVAPsI6DFf96vhTePso0Mz3GHYlYK3gUeDmYP9X6dGem8Q3x_Q

  - name: See a Big Buddah
    date: 2014-01-02
    location: Lantau Island, Hong Kong
    blog: /travelblog/2014hongkong/2014-01-02
    image: https://lh3.googleusercontent.com/IPtIsbkOGQSRVEmT45xqeLNYdDsUtAZyu67rDWlId21CyPoJRTSx2-w5tDmq__Qi0s039GFUfkwl4zLsoaA_x1-nvZ9FpzbrDEd__E2QDavHlagYZkrOWWiAdFwZYGSCztinAqLxfA
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
