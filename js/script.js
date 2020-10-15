// document ready
$(document).ready(function() {

	// magnificPopup
	// $('.image-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true
	// 	},
	// });



	// hero slider
	$('.hero-area').owlCarousel({
		animateOut: 'fadeOut',
		// animateIn: 'fadeOut',
		items: 1,
		autoplay: true,
		loop: true,

	})

	// Cause-slider
	$('.cause-slider').owlCarousel({
		animateOut: 'fadeOut',
		// animateIn: 'fadeOut',
		items: 3,
		margin: 0,
		// autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		loop: true,
		responsive: {
			0: {
				items:1,
			},
			768:{
				items: 2,
			},
			992:{
				items: 3,
			}
		}

	});


	// menu 
	jQuery(window).scroll(function(){
		var hight = jQuery('.header-area').innerHeight();
		var header = jQuery('.header-menu').innerHeight();

		var scrTop = jQuery(window).scrollTop();

		if ( hight < scrTop) {
			jQuery('.header-menu').addClass('stcicy')
		}else {
			jQuery('.header-menu').removeClass('stcicy');
		}

		if (header > scrTop) {			
			jQuery(".mobile-menu").css({top: hight});
		}else {
			jQuery(".mobile-menu").css({top: header});
		}

		// jQuery('.mobile-menu').hide(500);
		// console.log(hight);
	});
	

	// count
	jQuery('.counter').counterUp({
		time: 1000
	});


	// mobile menu
	jQuery('.menu-icon a').click(function(){
		jQuery('.mobile-menu').toggleClass('active');
		return false;
	})
	jQuery('.menu-icon a').click(function(){
		jQuery('.mobile-menu').toggleClass('inactive');

		return false;
	});


	// video popup
	jQuery('.video').magnificPopup({
		type: "iframe",
		iframe: {
		  markup: '<div class="mfp-iframe-scaler">'+
		            '<div class="mfp-close"></div>'+
		            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
		          '</div>',
		  patterns: {
		    youtube: {
		      index: 'youtube.com/', 
		      id: 'v=', 

		      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
		    }
		  }
		}
	});




	

	
});