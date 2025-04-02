export const modal = () => {
  (function($){
    $( '.js-modal' ).on( 'click', function() {
      $( '.js-modal + .modal-body' ).fadeOut( 300 );
      $( this ).next( '.modal-body' ).fadeIn( 300 );
    });

    $( '.item__modal-close' ).on( 'click', function() {
      $( '.js-modal + .modal-body' ).fadeOut( 300 );
    });

    $( '.js-modal + .modal-body' ).hide();
  })(jQuery);
};
  