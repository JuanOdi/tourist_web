  



export const headerScroll = () => {
  (function($){
    if ( $( window ).scrollTop() > 0 ) {
      if ( ! $( 'html' ).hasClass( 'is-scrolled' ) ) {
        $( 'html' ).addClass( 'is-scrolled' );
      }
    } else {
      if ( $( 'html' ).hasClass( 'is-scrolled' ) ) {
        $( 'html' ).removeClass( 'is-scrolled' );
      }  
    }
  })(jQuery);
}