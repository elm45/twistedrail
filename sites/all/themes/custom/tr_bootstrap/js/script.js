(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.twistedRail = {
  attach: function(context, settings) {

  // ------------------------------ GLOBAL VARIABLES -------------------------------



  // ------------------------------ LAYOUT -------------------------------
  
  // Front Page Layout
  

  if ($('.front').length) {


    var frontTotalBlocks = 0;

    $('.region-content').children('.block').not('.block-system').not('.gallery_slider_block').each(function(){
      frontTotalBlocks++;
      console.log(frontTotalBlocks);
      $(this).addClass('columnize');

      // MEDIUM SCREEN STYLES - ADD "IF BREAKPOINT" 
      if (frontTotalBlocks == 3 || frontTotalBlocks == 6) {
        $('.columnize').addClass('col-md-4');
      }
      if (frontTotalBlocks == 2 || frontTotalBlocks == 4) {
        $('.columnize').addClass('col-md-6');
      }
      if (frontTotalBlocks == 1) {
        $('.columnize').addClass('col-md-12');
      }


      // SMALL SCREEN STYLES - ADD "IF BREAKPOINT" 
      if (frontTotalBlocks == 3 || frontTotalBlocks == 6) {
        $('.columnize').addClass('col-sm-6');
      }
      if (frontTotalBlocks == 2 || frontTotalBlocks == 4) {
        $('.columnize').addClass('col-sm-6');
      }
      if (frontTotalBlocks == 1) {
        $('.columnize').addClass('col-md-12');
      }

    });
      $('.columnize').wrapAll('<div class="row"></div>');


}









  // if ($('.front').length) {


    // $('.region-content').children('.block').each(function(){
    //   if (!$(this).hasClass('.block-system')) {
    //       $(this)addclass('test');
    //   }
    //     frontTotalBlocks++;
    //     console.log(frontTotalBlocks);
    //   }
    // });








    // var frontBlockCount = frontTotalBlocks - frontIgnoreBlocks;
    // if (frontBlockCount = 3) {
    //     $('.region-content').children('.block').addClass('col-md-4');
    //   }
    // }
  //}

  // ------------------------------ FADE IN PAGE -------------------------------

  $('#page').hide();
  $('#page').fadeIn(1000);












  }
};


})(jQuery, Drupal, this, this.document);
