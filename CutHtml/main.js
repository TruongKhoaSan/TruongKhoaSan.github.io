$(function() {
	$('#open-sidebar').on('click', function(event) {
		event.preventDefault();
		if($('.navigation').hasClass('isOpen')) {
			$('.navigation').removeClass('isOpen')
			$(this).removeClass('isOpen')
		}
		else {
			$(this).addClass('isOpen')
			$('.navigation').addClass('isOpen')
		}
		$(document).mouseup(function(e) {
		    let container = $('.navigation');
		    if (!container.is(e.target) && container.has(e.target).length === 0 && !$(e.target).hasClass('isOpen')) {
		        container.removeClass('isOpen');
		        $('#open-sidebar').removeClass('isOpen')
		    }
		});
	});

	$('.blog-cards').slick({
		slidesToShow: 3,
		sildesToScroll: 1,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	  	]
	})

	function mediaSize() { 
		if (window.matchMedia('(min-width: 992px)').matches) {
			$('.header').removeClass('isMobile')
		}
		else {
			$('.header').addClass('isMobile')
		}
	};
 	mediaSize();
	window.addEventListener('resize', mediaSize, false);  

	
});