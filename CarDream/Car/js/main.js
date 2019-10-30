$(function() {
	
	$('#open-menu').on('click', function(event) {
		event.preventDefault()
		$('.navigation').slideToggle(400)
	});
	
	function mediaSize() { 
		if (window.matchMedia('(min-width: 768px)').matches) {
			$('header').removeClass('isMobile')
			$('.navigation').slideDown()
		}
		else {
			$('header').addClass('isMobile')
			$('.navigation').slideUp()
			
		}
	};

	$('.tips-group').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 1130,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	})

 	mediaSize();
	window.addEventListener('resize', mediaSize, false);  

	
});