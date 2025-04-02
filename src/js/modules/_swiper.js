
export const swiperJS = () => {
  (function($){
  if ( $( '.js-swiper' ).length ) {
    $( '.js-swiper' ).each( function() {
      let options = null;

      if ( $( this ).hasClass( 'top-banner' ) ) {
        options = {
          autoplay: true,
          effect: 'fade',
          loop: true,
          noSwipingClass: 'swiper-slide',
        };
      } else if ( $( this ).hasClass( 'top-swiper' ) ) {
        options = {
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          slidesPerView: 3,
          spaceBetween: 15,
        };
      }

      new Swiper( this, options );
    } );
  }
  })(jQuery);
}

