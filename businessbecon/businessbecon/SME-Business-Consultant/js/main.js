/*
Template Name: Unify Multipurpose HTML5 Template
Template URI: www.bootitems.com
Description: This is a multipurpose html5 template
Author: Masud Rana
Author URI: www.bootitems.com
Version: 1.0  
*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu Active
	02. WOW js active
	03. Corporate Home Slider Active
	04. Construction Home Slider Active
	05. Ecommerce Home Slider Active
	06. Medical Home Slider Active
	07. Travel Home Slider Active
	08. Resturant Home Slider Active
	09. Clients Carousel Active
	10. Blog Feed Carousel Active
	11. Brand Logos Carousel Active
	12. Doctors Carousel Active
	13. Patient Say's Carousel Active
	14. Resturant Page Testimonial Active
	15. Construction Testimonial  Active
	16. Travel Page Testimonials Slider Active
	17. Ecommerce Page Testimonial Active
	18. Construction Page Blog Carousel Active
	19. Resturant Page Blog Carousel Active
	20. Travel Page Blog Carousel Active
	21. Medical Page Blog Carousel Active
	22. Ecommerce Page Blog Carousel Active
	23. Portfolio Items MixItUp Active
	24. Popular Product Items MixItUp Active
	25. Post Carousel Active
	26. Progress Bar Active
	27. Circular Bars - Knob Active
	28. Search Box Dorpdown Toggle
	29. Cart Items Dropdown Toggle
    30. Product Details Slider Active
    31. Cart Items Dropdown Toggle (Resturant)
    32. Hidden Navigation Dropdown Toggle
    33. Price-slider active	
	34. Cart-plus-minus-button Active
	35. Sticky Header Active
	36. Parallax Background Active
	37. Pretty Photo Lightbox Active
	38. Masonary Active
	39. Active Class to Accordion
	40. jQuery Smooth Scroll Active
	41. Owl Carousel Active For Portfolios
	42. Tooltip Active
	43. scrollUp Active
======================================
[ End table content ]
======================================*/
(function ($) {
	   "use strict";
	   
/* 01. jQuery MeanMenu Active  */  
	jQuery("nav#mobile-menu").meanmenu();	
	
/* 02. WOW js active */  
    new WOW().init();
	
/* 03. Corporate Home Slider Active */  
	$(".unify-owl-slider").owlCarousel({
		autoPlay: 8000, 
		slideSpeed:500,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
	
/* 04. Construction Home Slider Active */  
	$(".slider-construction").owlCarousel({
		autoPlay: 8000, 
		slideSpeed:500,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	}); 
	
/* 05. Ecommerce Home Slider Active */  
	$(".slider-ecommerce").owlCarousel({
		autoPlay: 5000, 
		slideSpeed:200,
		pagination:false,
		navigation:true,	  
		loop:true,
		mouseDrag : false,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,
        stopOnHover	: false,	
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
	});	
	
/* 06. Medical Home Slider Active */   
	$(".slider-medical").owlCarousel({
		autoPlay: 8000, 
		slideSpeed:400,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : false,
		singleItem:true,
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	}); 
	
/* 07. Travel Home Slider Active */  	
	$(".slider-travel").owlCarousel({
		autoPlay: 5000, 
		slideSpeed:200,
		pagination:true,
		paginationNumbers:true,
		navigation:false,	  
		loop:true,
		mouseDrag : false,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,
        stopOnHover	: false,	
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	}); 	
	
/* 08. Resturant Home Slider Active */  
	$(".slider-resturant").owlCarousel({
		autoPlay: 5000, 
		slideSpeed:200,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : false,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,
        stopOnHover	: true,	
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	}); 
	
/* 09. Clients Carousel Active */  	
	$("#clients-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
	
/* 10. Blog Feed Carousel Active */  	
	$("#blog-feed-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 
	
/* 11. Brand Logos Carousel Active */  	 
	$("#brand-logos-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 5,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [980,4],
		itemsTablet: [768,3],
		itemsMobile : [479,2],
	}); 
	$(".brand-logos").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 5,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 
	
/* 12. Doctors Carousel Active */  	 
	$(".doctors-inner").slick({
	  centerMode: true,
	  centerPadding: "0",
	  slidesToShow: 3,
	  prevArrow: "<div class='arrow-prev'><i class='icofont icofont-curved-left'></i></div>",
	  nextArrow: "<div class='arrow-next'><i class='icofont icofont-curved-right'></i></div>",		  
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		}
	  ]
	});	
	
/* 13. Patient Say's Carousel Active */	 	 
	$("#patient-quotes").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});	
	
/* 14. Resturant Page Testimonial Active */  	
	$(".rest-testimonials").slick({
	  centerMode: true,
	  accessibility: true,
	  centerPadding: "0",
	  slidesToShow: 3,
	  prevArrow: "<div class='arrow-prev'><i class='icofont icofont-caret-left'></i></div>",
	  nextArrow: "<div class='arrow-next'><i class='icofont icofont-caret-right'></i></div>",		  
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: "0",
			slidesToShow: 1
		  }
		}
	  ]
	});	
	
/* 15. Construction Testimonial  Active */  	 
	 $(".cons-testi-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,	
		asNavFor: ".cons-testi-nav"
	});
	$(".cons-testi-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".cons-testi-for",
		arrows: true,
		prevArrow: "<div class='testi-prev'><i class='icofont icofont-caret-left'></i></div>",
		nextArrow: "<div class='testi-next'><i class='icofont icofont-caret-right'></i></div>",		  
		centerMode: true,
		centerPadding: "0px",
		focusOnSelect: true,  
	});
	
/* 16. Travel Page Testimonials Slider Active  */	 		
	 $(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		prevArrow: "<div class='testi-prev'><i class='icofont icofont-curved-left'></i></div>",
		nextArrow: "<div class='testi-next'><i class='icofont icofont-curved-right'></i></div>",	
		asNavFor: '.slider-nav'
	});
	$(".slider-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".slider-for",
		arrows: true,
		centerMode: true,
		centerPadding: "0px",
		focusOnSelect: true,  
	});

/* 17. Ecommerce Page Testimonial Active */	 	
	$(".fasion-testimonials").slick({
		centerMode: true,
		vertical: true,
		accessibility: false,
		centerPadding: '0',
		slidesToShow: 3,
		prevArrow: "<div class='arrow-prev'><i class='icofont icofont-curved-left'></i></div>",
		nextArrow: "<div class='arrow-next'><i class='icofont icofont-curved-right'></i></div>",		  
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "0",
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "0",
				slidesToShow: 1
			}
		}
		]
	});		
	
/* 18. Construction Page Blog Carousel Active */ 	  
	$(".const-blog-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});
	
/* 19. Resturant Page Blog Carousel Active */ 	 
	$("#resturant-blog-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
	
/* 20. Travel Page Blog Carousel Active */ 	 
	$(".travel-blog-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
	
/* 21. Medical Page Blog Carousel Active */ 	 
	$(".medical-blog-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});  
	
/* 22. Ecommerce Page Blog Carousel Active  */	 
	$(".fasion-blogs-carousel").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
	
/*  23. Portfolio Items MixItUp Active  */	 	
	$(".portfolio-items").mixItUp();
	
/*  24. Popular Product Items MixItUp Active  */	 	
	$(".product-items").mixItUp();
	
/*  25. Post Carousel Active  */	 
	$(".post-carousel").owlCarousel({
		autoPlay: 5000, 
		slideSpeed:500,
		pagination:false,
		navigation:true,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    // transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
	}); 
	
/* 26. Progress Bar Active */	 	 
	$(".progress-item").each(function() {
		var progressBar = $(".progress-bar");
		progressBar.each(function(indx){
		    $(this).css("width", $(this).attr("aria-valuenow") + "%");
		});
	});
	
/* 27. Circular Bars - Knob Active  */		
	  if(typeof($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
		  var $this = $(this),
			  knobVal = $this.attr('data-rel');
	
		  $this.knob({
			'draw' : function () { 
			  $(this.i).val(this.cv + '%')
			}
		  });
		  $this.appear(function() {
			$({
			  value: 0
			}).animate({
			  value: knobVal
			}, {
			  duration : 2000,
			  easing   : 'swing',
			  step     : function () {
				$this.val(Math.ceil(this.value)).trigger('change');
			  }
			});
		  }, {accX: 0, accY: -150});
		});
	  }	
	  
/* 28. Search Box Dorpdown Toggle */		   
	$("ul li.search-btn > span").on("click", function(){
		$("ul li.search-btn .search-box").fadeToggle(300);
	});	 
	
/* 29. Cart Items Dropdown Toggle  */		  
	$("ul li.shiping-cart > span").on("click", function(){
		$("ul.cart-items-container").slideToggle(300);
	});	  
	
/* 30. Product Details Slider Active  */		
	$(".details-thumb-big").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: ".details-thumb-small"
	});
	$(".details-thumb-small").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".details-thumb-big",
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: true,
	    centerPadding: "0px",		
		prevArrow: "<div class='arrow-prev'><i class='icofont icofont-curved-left'></i></div>",
		nextArrow: "<div class='arrow-next'><i class='icofont icofont-curved-right'></i></div>",
	});
	
/* 31. Cart Items Dropdown Toggle (Resturant) */	  
	$("p.resturuarnt-cart-btn").on("click", function(){
		$("ul.cart-items-container").slideToggle(300);
	});	
	
/* 32. Hidden Navigation Dropdown Toggle */		   
	$("ul li.menu-lines > span").on("click", function(){
		$(".hidden-menu-area").fadeToggle(300);
	});	
	
/* 33. Price-slider active  */		 
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 800,
		values: [ 50, 300 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	  
/*  34. Cart-plus-minus-button Active  */	
	$(".cart-plus-minus").append("<div class='dec qtybutton'>-</i></div><div class='inc qtybutton'>+</div>");
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
	
/* 35. Sticky Header Active */		  
	$(window).bind("scroll", function() {
		var navHeightdefault = 0; // custom nav height
		($(window).scrollTop() > navHeightdefault) ? $("#sticky-primary").addClass('sticky') : $("#sticky-primary").removeClass("sticky");	
		var navHeight = 50; // custom nav height
		($(window).scrollTop() > navHeight) ? $("#sticky-secondary").addClass('sticky') : $("#sticky-secondary").removeClass("sticky");
	});		
	
/* 36. Parallax Background Active */		  
	$.stellar({
		horizontalScrolling:false,
		hideDistantElements: false,
		verticalOffset: 0,
		horizontalOffset: 0		
	});	
	
/* 37. Pretty Photo Lightbox Active */
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		hook: 'data-gal',
		animation_speed:'normal',
		theme:'pp_default',
		slideshow:3000,
		autoplay_slideshow: false
	});	
	
/* 38. Masonary Active  */				
	$(".masonry-container").masonry({
	  // options
	  itemSelector: ".masonry-item",
	  columnWidth: ".masonry-item",
	});	
	
/* 39. Active Class to Accordion  */		
	$(".panel-collapse").on("show.bs.collapse", function () {
		$(this).siblings(".panel-heading").addClass("active");
	});

	$(".panel-collapse").on("hide.bs.collapse", function () {
		$(this).siblings(".panel-heading").removeClass("active");
	});
	
/* 40. jQuery Smooth Scroll Active */	
	$(".main-menu a[href*='#']:not([href='#'])").click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  var headerH = "80";
		  target = target.length ? target : $("[name=' + this.hash.slice(1) +']");
		  if (target.length) {
			$("html, body").animate({
			  scrollTop: target.offset().top - headerH + "px"
			}, 1000);
			return false;
		  }
		}
	});
	
/*  41. Owl Carousel Active For Portfolios  */		
	$(".owl-corousel-default-1").owlCarousel({
		autoPlay: 1500, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 6,
		navigationText:["prev","next"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 	
	$(".owl-corousel-default-2").owlCarousel({
		autoPlay: 2000, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 6,
		navigationText:["prev","next"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 	 
	$(".owl-corousel-1").owlCarousel({
		autoPlay: 3000, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 6,
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 	
	$(".carousels-fullwidth").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 6,
		navigationText:["<i class='icofont icofont-curved-left'></i>","<i class='icofont icofont-curved-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	}); 	
	
/*  42. Tooltip Active  */	
	$("body").tooltip({ selector: "[data-toggle=tooltip]" });	

/* 43. scrollUp Active */	
	$.scrollUp({
        scrollText: "<i class='icofont icofont-thin-up'></i>",
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    }); 	   
 
})(jQuery); 