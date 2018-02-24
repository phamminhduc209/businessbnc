/*
 * ---------------------------------------------------
 * 1. Slide Carousel
 * 2. Scroll to Top
 * 3. Sticky Menu
 * 4. WOW
 * 5. Menu Mobile
 */

  (function($){
    "use strict";
  /* ==================================================== */

  /*
   * 1. Slide Carousel
  */
  $(document).ready(function() {
    $('.owl-carousel').each(function(index, el) {
      var config = $(this).data();
      config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
      config.smartSpeed="800";
      
      if($(this).hasClass('owl-style2')){
        config.animateOut='fadeOut';
        config.animateIn='fadeIn';    
      }
      if($(this).hasClass('dotsData')){
        config.dotsData="true";
      }
      $(this).owlCarousel(config);
    });
  });

  /*
   * 2. Scroll to Top
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  /*
   * 3. Sticky Menu
  */
  $('.block-header-fixed').sticky({
    topSpacing: 0,
    responsiveWidth: true,
    wrapperClassName: 'hidedesktop',
  });

  /*
   * 4. WOW
  */
  new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }).init();

  /*
   * 5. Menu Mobile
  */
  $("#menu")
    .mmenu({
      extensions: ["theme-black", "listview-huge", "fx-panels-slide-100", "fx-listitems-slide", "fx-menu-slide", "border-offset"],
      navbar: {
          // title: 'Menu'
      },
      onClick: {
          close: true
      },
      navbars: [{
        // position: 'top',
        content: [
          'prev',
          'title',
          'close'
        ]
      }]                
    });
  var API = $("nav#menu").data( "mmenu" );
  $("#menu #a-mb").click(function() {
      API.close();
  });

})(jQuery); // End of use strict