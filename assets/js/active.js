$(document).ready(function(){
	// Header Slider 
  $('.all_slider').owlCarousel({
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000, 
		// dots:true,
		// nav:true,
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	  
  });


  /* PortfolioIsotope Masonry */
  $('.grid').masonry({
	// set itemSelector so .grid-sizer is not used in layout
	itemSelector: '.grid-item',
	// use element for option
	columnWidth: 1,
	percentPosition: true
  })
		
//   var $grid = $('.portfolio_active').isotope({
// 	itemSelector: '.grid-item',
// 	percentPosition: true,
// 	masonry: {
// 	  columnWidth: 1
// 	}
//   });		
  
  /* Portfolio Menu Isotope */
  $('.portfolio_btn').on( 'click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });
	  
 /* Active Js*/ 

  $('.portfolio_btn button').on('click', function(event) {
	  $(this).siblings('.active').removeClass('active');
	  $(this).addClass('active');
	  event.preventDefault();
  });	

  /* Work Area Magnific PoPUp Js */
  $('.project_active').each(function() { // the containers for all your galleries
	$(this).magnificPopup({
		delegate: 'a', // the selector for gallery item
		type: 'image',
		gallery: {
		  enabled:true
		}
	});
});


//   $('.menues ul li ul').click(function() {
// 		$(this).addClass('l');
// 	});


	/* CounterUP */
  $('.counter').counterUp({
                delay: 10,
                time: 1000
            });

		
		/* Work Area Isotope Masonry */
		
		var $grid = $('.work_active').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
			columnWidth: 1
		  }
		});		
		
		/* Work Menu Isotope */
		$('.work_menu').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
			
	   /* Active Js*/ 

		$('.work_menu button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});	


		/* Work Area Magnific PoPUp Js */
		$('.work_active').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});

		new WOW().init();


});

	//Sticky Header
//   $(window).on('scroll',function() {    
//    var scroll = $(window).scrollTop();
//    if (scroll < 20) {
//     $(".sticky").removeClass("scroll-header");
//    }else{
//     $(".sticky").addClass("scroll-header");
//    }
//   }); 
	
  $(document).on('scroll', function() {
    var scrollPos = $(this).scrollTop();

    if( scrollPos > 10 ) {
        $('.header_menu_area').addClass('scroll-header');
    }

    else {
        $('.header_menu_area').removeClass('scroll-header');
    }
});