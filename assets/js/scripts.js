

AOS.init();

$(document).ready(function () {
    $(".ex_banner_carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		nav: false,
		touchDrag: false,
		mouseDrag: false, 
		dots: true,
		autoplayTimeout: 5000, 
		smartSpeed: 3000, 
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
    });

	$(".service_product_carousel").owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		dots: false,
		margin: 30,
		navText: [
			' <img src="assets/images/services/left.png" alt="">',
			'<img src="assets/images/services/right.png" alt="">'
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			}
		}
	});

	$(".art_imges_carousel").owlCarousel({
		items: 1,
		loop: true, 
		nav: false,
		dots: false,
		margin: 20, 
		autoplay: true,
	});

	$(".travel_slider_owl").owlCarousel({
		items: 1,
		loop: true, 
		nav: true,
		dots: false,
		margin: 20, 
		navText: [
			'<i class="fa-solid fa-caret-left"></i>',
			'<i class="fa-solid fa-caret-right"></i>'
		],
		smartSpeed: 1000, 
	});

	$(".why_box_carousel").owlCarousel({
		items: 2.5, 
		nav: true,
		dots: false,
		margin: 20, 
		navText: [
			'<i class="fa-solid fa-caret-left"></i>',
			'<i class="fa-solid fa-caret-right"></i>'
		],
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1.2
			},
			768: {
				items: 1.5
			},
			1024: {
				items: 2.5, 
			}
		} 
	});

	$(".about_whyus_text_box").owlCarousel({
		items: 3,
		loop: true, 
		nav: true,
		dots: false,
		margin: 30, 
		navText: [
			'<i class="fa-solid fa-arrow-left"></i>',
			'<i class="fa-solid fa-arrow-right"></i>'
		],
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			}
		} 
	});
	
	

	
	$.Scrollax();
});





$(document).ready(function(){ 

	$(document).ready(function () {
		$('.bars_icon').click(function (e) {
			e.preventDefault();
	
			// Toggle menu and overlay visibility
			$('.bars_menu, .bars_overlay').toggleClass('open');
	
			const menuIcon = $(this).find('.menu-icon');
	
			if (menuIcon.length) {
				// Remove the image and add the Font Awesome close icon
				menuIcon.remove(); // Remove the image
				$(this).append('<i class="fa fa-times close-icon"></i>'); // Add Font Awesome close icon
				$('body').addClass('no-scroll'); // Disable scrolling
			} else {
				// Remove the Font Awesome close icon and add the image back
				$(this).find('.close-icon').remove(); // Remove the close icon
				$(this).append('<img src="assets/images/main-menu.png" alt="Menu Icon" class="menu-icon">');
				$('body').removeClass('no-scroll'); // Enable scrolling
			}
		});
	
		// Hide menu and reset icon when clicking the overlay
		$('.bars_overlay').click(function () {
			$('.bars_menu, .bars_overlay').removeClass('open');
	
			const barsIcon = $('.bars_icon');
			barsIcon.find('.close-icon').remove(); // Remove close icon
			barsIcon.append('<img src="assets/images/main-menu.png" alt="Menu Icon" class="menu-icon">');
			$('body').removeClass('no-scroll'); // Enable scrolling
		});
	});
	
	
	
	
	
	

	// Banner Carousel
	$(document).ready(function(){
		$(".banner_carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: false,
			touchDrag: false,
			mouseDrag: false, 
			dots: false,
			autoplayTimeout: 5000, 
			smartSpeed: 3000, 
			animateOut: 'fadeOut',
			animateIn: 'fadeIn', 
		});
	});
 
 
	
	
	

	$(document).ready(function () {
		$(window).on("scroll", function () { 
			if ($(window).scrollTop() > 0) {
				// $(".bars_icon").addClass("fixed_bars");
				$('.header_area').addClass('header_fixed');
				$('.header_area').removeClass('extra_header');
				$('.logo').css({'opacity':'0','visibility':'hidden'});
				$('.hide_menu').css({'opacity':'0','visibility':'hidden'});
				$('.mobile_icon').css({'opacity':'0','visibility':'hidden'});
			} else {
				$('.header_area').removeClass('header_fixed');
				// $(".bars_icon").removeClass("fixed_bars");
				$('.header_area').addClass('extra_header');
				$('.logo').css({'opacity':'1','visibility':'visible'});
				$('.hide_menu').css({'opacity':'1','visibility':'visible'});
				$('.mobile_icon').css({'opacity':'1','visibility':'visible'});
			}
		});
	});
	
	





});


 

$(document).ready(function() {
	$(".js-select2").select2({
	  closeOnSelect: false
	});
	$(".js-select2-multi").select2({
	  closeOnSelect: false
	});
  });


// test 


  var swiper = new Swiper('.swiper-container', {
    speed: 500,
    direction: 'horizontal',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
		watchOverflow : true,
    on: {
        slideChange: function() {
            setTimeout(function () {
              swiper.params.touchReleaseOnEdges = false;  
							swiper.params.mousewheel.releaseOnEdges = false;
            });
        },
        reachEnd: function() {
            setTimeout(function () {
								swiper.params.touchReleaseOnEdges = true;
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
        },
				reachBeginning: function() {
            setTimeout(function () {
								swiper.params.touchReleaseOnEdges = true;
                swiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
        }
    }
});

