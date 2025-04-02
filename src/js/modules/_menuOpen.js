
export const menuOpen = {
  init: function() {
    (function($){
      $( '.js-menu-toggle' ).on( 'click', function() {
        $( 'html' ).toggleClass( 'is-menu-opened' );
      } );
    })(jQuery);

  },
  resize: function() {
    (function($){
      $( 'html' ).removeClass( 'is-menu-opened' );
    })(jQuery);
  },
}