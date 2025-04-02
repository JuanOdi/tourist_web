  

export const accordion = () => {
    (function($){

    $( '.js-accordion' ).each( function() {
    let $root = $( this );

    $root.find( '.js-accordion__link' ).off( 'click' ).on( 'click', function( e ) {
    e.preventDefault();
    const $this = $( this );
    const $content = $this.closest( '.js-accordion__item' ).find( '.js-accordion__content' );

    if ( $this.hasClass( 'is-active' ) ) {
      $this.removeClass( 'is-active' );
      $content.stop().slideUp();
    } else {
      $root.find( '.is-active' ).removeClass( 'is-active' ).closest( '.js-accordion__item' ).find( '.js-accordion__content' ).stop().slideUp();

      $this.addClass( 'is-active' );
      $content.stop().slideDown();
    }
    } );

    $root.find( '.js-accordion__content' ).hide();
    } );
    })(jQuery);

}