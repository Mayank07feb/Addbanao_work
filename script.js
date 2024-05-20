document.addEventListener('DOMContentLoaded', function () {
    // Select the slider containers
    const sliderContainer = document.querySelector('.slider-container');
    const swiperContainer = document.querySelector('.swiper-container');
    const mediaSwiperContainer = document.querySelector('.media_swiper_container');

    // Initialize auto-scrolling for both sliders
    startAutoScroll(sliderContainer, 3000);
    startAutoScroll(swiperContainer, 2000);
    startAutoScroll(mediaSwiperContainer, 2500); // Adjust interval as needed

    // Initialize Swiper for .swiper-container
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Toggle button functionality
    const toggleBtn = document.querySelector('.toggle-btn');
    const navLinks = document.querySelector('.nav-links');

    toggleBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});

function startAutoScroll(container, interval) {
    let isScrolling = false;

    setInterval(() => {
        if (!isScrolling) {
            isScrolling = true;
            container.scrollBy({ left: 320, behavior: 'smooth' }); // Adjust scroll amount as needed
            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Adjust delay between scrolls as needed
        }
    }, interval); // Adjust interval between scrolls as needed
}




//  Testimonial Carousel Code


(function($) {
	
	"use strict";
	
	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			animateOut: 'slideOutDown',
		    animateIn: 'zoomIn',
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 300,
			autoplay: 7000,
			navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  		
	}
	
})(window.jQuery);







/*
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

*/
 

