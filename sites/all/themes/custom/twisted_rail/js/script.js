/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.twistedRail = {
  attach: function(context, settings) {

    // Place your code here.


  // ------------------------------ FADE IN PAGE -------------------------------


  $('#page').hide();
  $('#page').fadeIn(1000);


  // ------------------------------ FADE IN/OUT LOGO -------------------------------

  // if the .front class exists (i.e. if on the front page)
  if ($('.front').length) {
    $('.header__logo-image').hide();
    var elPos = $('.logo-fade').offset().top;
    $(window).scroll(function() {
      // Contains the position of the window
      var scrollPos = $(this).scrollTop();
      // if the window top is greater than the difference window and #navigation position 
      if (scrollPos > elPos + 330) {  
        // Fade the small logo in
        $('.header__logo-image').fadeIn(300);
      }
      else {  
        // Otherwise, fade the logo out
        $('.header__logo-image').fadeOut(300);
      }
    });
  };


  // Set main top margin to same height has the header

  var headerHeight = $('#header').height();

  $('#main').css('margin-top', headerHeight+'px');








  }
};


})(jQuery, Drupal, this, this.document);
