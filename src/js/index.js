import { accordion } from "./modules/_accordion";
import { anchorLink } from "./modules/_anchorLink";
import { headerScroll } from "./modules/_headerScroll";
import { menuOpen } from "./modules/_menuOpen";
import { swiperJS } from "./modules/_swiper";
import { tabs } from "./modules/_tabs";
import { modal } from "./modules/_modal";

( function($) {
  $( function() {
    // General
    anchorLink();
    headerScroll();
    menuOpen.init();
    
    // Layouts
    accordion();
    tabs();
    modal();

    // API Configurations
    swiperJS();


    if ( AOS ) {
      AOS.init( {
        disable: window.innerWidth < 992,
        duration: 800,
        easing: 'ease-out-quart',
        once: true,
      } );
    }

  } );

  $( window ).on( 'scroll', function() {
    headerScroll();
  } );

  $( window ).on( 'resize', function() {
    menuOpen.resize();
  } );
})(jQuery);
