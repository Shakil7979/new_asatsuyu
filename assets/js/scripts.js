

AOS.init();

$(document).ready(function () {
    $(".ex_banner_carousel").owlCarousel({
        items: 1,                // Show one item at a time
        loop: true,              // Enable infinite looping
        autoplay: true,          // Enable autoplay
        nav: false,              // Disable navigation arrows
        dots: true,              // Show navigation dots
        autoplayTimeout: 6000,   // 6 seconds per slide
        smartSpeed: 1000,        // Smooth transition speed
        onTranslated: function () {
            // Remove animation from all content
            $(".image_content").removeClass("animate-content");
            // Add animation to the active content
            $(".owl-item.active .image_content").addClass("animate-content");
        },
        onInitialized: function () {
            // Add animation to the first visible content
            $(".owl-item.active .image_content").addClass("animate-content");
        }
    });
});





$(document).ready(function(){
	// Mobile Menu
	$(document).ready(function () {
		$('.bars_icon').click(function (e) {
			e.preventDefault();  
	 
			$('.bars_menu').slideToggle(1000);  
	 
			const icon = $(this).find('i');
			if (icon.hasClass('fa-bars')) {
				icon.removeClass('fa-bars').addClass('fa-times');  
			} else {
				icon.removeClass('fa-times').addClass('fa-bars');
			}
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
			autoplayTimeout: 6000, 
			smartSpeed: 3000, 
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			onTranslated: function(event) {
				$(".banner_carousel_item").removeClass("active");  
				$(".owl-item.active .banner_carousel_item").addClass("active");  
			},
			onInitialized: function(event) {
				$(".owl-item.active .banner_carousel_item").addClass("active");  
			}
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



// left right 

// $(document).ready(function () {
//     const container = $(".about_whyus_text_box");
//     const section = $(".about_whyus");

//     $(window).on("scroll", function () {
//         const scrollTop = $(window).scrollTop();
//         const sectionTop = section.offset().top;
//         const sectionHeight = section.outerHeight();
//         const windowHeight = $(window).height();

//         // Check if the section is in view
//         if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
//             // Calculate scroll percentage relative to the section
//             const scrollPercentage =
//                 (scrollTop + windowHeight - sectionTop) / (sectionHeight + windowHeight);

//             // Move items horizontally based on scroll
//             const translateValue = -scrollPercentage * container.width(); // Negative for left movement
//             container.css("transform", `translateX(${translateValue}px)`);
//         }
//     });
// });

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

