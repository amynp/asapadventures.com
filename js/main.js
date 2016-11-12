/*
 * Initializing the plugins we use and our little functions ;-)
 * 1. Select list dropdown,
 * 2. Animation on scroll - wow.js,
 * 3. Page loading function (Preloader),
 * 4. Function for adding sections background from html,
 * 5. Function for moving about section to watch video presentation,
 * 6. Arrow up && down functions,
 * 7. Tour page top EYE hover functions
 * 8. Gallery lightbox - magnific-popup
 * 9. Second navigation smooth scrool to div 
 * 10. Navbar fixed position
 * 11. Play youtube video
 */ 

"use strict";
var navbar = $(".navbar-default");
var arrowUp = $('.goUp-btn');
var arrowDown = $('.scroll-down');
var interval = 0;
var timeOut = setInterval(function(){preLoader();}, 2000);


// 1. Initializing select list 
  
(function selectList() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})();


// 2. Initializing wow animation on scroll
	var wow = new WOW(
		{
			boxClass:     'wow',     
			animateClass: 'animated',
			offset:       30,         
			mobile:       false,      
			live:         true,      
		}
	)

// 3. page loading function
function preLoader(){
			
	if (interval == 1) {

		clearInterval(timeOut);
	
		$('.page_load').fadeOut(1000, function(){
			if ($('#destinations-map, #map, #road-map').length > 0){
				initMap();	
			}
			
			wow.init();
		});

		$('#page-content').addClass('loaded');
	}
}

$(document).ready(function (){
	//overlay interval
 	interval = 1;    //

	//add animated class
	

    // 4. dinamically add background from html
	$.each($('[data-bg]'), function(){
	    if ($(this).attr('data-bg').length > 0){
	      $(this).css('background-image', 'url('+ $(this).attr('data-bg') +')');
	    }
	});

	// 5. move about block
	$('.play-btn').on('click', function(){
		var $this = $(this);
		$('.about-description, .about-foundation').toggleClass('move');
		$('.about-video-bg').toggleClass('video-play');
		$('#about-play').toggleClass('active');
		$('#about-stop').toggleClass('active');
	});

	// 6.arrow up && down functions
	$(window).on('scroll', function() {    
	    var scroll = $(window).scrollTop() + $(window).height();
	    var header = $('header').offset().top;
	    
	    if (scroll >= 1000) {
	        arrowUp.addClass("visible");
	    }else{
	    	arrowUp.removeClass("visible");
	    };
	    if ($('section.about').length > 0){
		    if (scroll >= $('section.about').offset().top && scroll <= $('section.about').offset().top + $('section.about').height()){
		    	arrowUp.addClass('white');
		    } else{
		    	arrowUp.removeClass('white');
		    }
		}
	    
	});
	arrowUp.on('click', function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});
	arrowDown.on('click', function() {
	    $('html, body').animate({
	        scrollTop: $(".top-destination").offset().top
	    }, 600);
	});

	// 7. Tour page top EYE hover functions

	$('#hoverEye').on('mouseenter', function(){
		$('#tour-header').addClass('hovered');
	}).on('mouseleave', function(){
		$('#tour-header').removeClass('hovered');
	});

	//  8. Gallery lightbox - magnific-popup
	$('.gallery-photos').magnificPopup({
	  delegate: 'a', 
	  type: 'image',
	  gallery:{
	    enabled:true
	  },
	  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
	  tPrev: '<i class="fa fa-angle-left"></i>', // title for left button
  	  tNext: '<i class="fa fa-angle-right"></i>', // title for right button

	});

	// 9. Second navigation smooth scrool to div 
	$('#second-nav a[href*=#]').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	    && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target
	      || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top - 80;
	        $('html,body')
	        .animate({scrollTop: targetOffset}, 1000);
	       return false;
	      }
	    }
	});

	// 10. Navbar fixed position
	$(window).on('scroll', function() {    
    		// fixed to top navbar
            var scroll = $(window).scrollTop();
    	    if (scroll >= 50) {
    	       	navbar.addClass("navbar-fixed-top");
    	    }else{
    	    	navbar.removeClass("navbar-fixed-top");
    	    }
	});

	$('[href="#day2-tab"]').on('click', function(){
		if (typeof map2 == "undefined") {
			setTimeout(function(){
				initMap2();	
			},10);
		}
	});
	$('[href="#day3-tab"]').on('click', function(){
		if (typeof map3 == "undefined") {
			setTimeout(function(){
				initMap3();	
			},10);
		}
	});
var player;
	//  11. Play youtube video
	$('#play-video').on('click', function(ev) {
 		$('.video-overlay').fadeOut('fast');
	    $("#video-post")[0].src += "&autoplay=1";
	    ev.preventDefault();
	});

	
});