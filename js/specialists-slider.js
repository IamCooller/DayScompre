$('.doctors-slider, .uzi-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
    pauseOnHover:false,
	arrows: false,
	dots: true,	
	responsive: [
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 769,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
});