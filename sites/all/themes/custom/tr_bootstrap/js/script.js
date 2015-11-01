(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.twistedRail = {
  attach: function(context, settings) {

  // ------------------------------ GLOBAL VARIABLES -------------------------------



  // ------------------------------ LAYOUT -------------------------------
  
  // // Front Page Layout
  

  // if ($('.front').length) {


  //   var frontTotalBlocks = 0;

  //   $('.region-content').children('.block').not('.block-system').not('.gallery_slider_block').each(function(){
  //     frontTotalBlocks++;
  //     console.log(frontTotalBlocks);
  //     $(this).addClass('columnize');

  //     // MEDIUM SCREEN STYLES - ADD "IF BREAKPOINT" 
  //     if (frontTotalBlocks == 3 || frontTotalBlocks == 6) {
  //       $('.columnize').addClass('col-md-4');
  //     }
  //     if (frontTotalBlocks == 2 || frontTotalBlocks == 4) {
  //       $('.columnize').addClass('col-md-6');
  //     }
  //     if (frontTotalBlocks == 1) {
  //       $('.columnize').addClass('col-md-12');
  //     }


  //     // SMALL SCREEN STYLES - ADD "IF BREAKPOINT" 
  //     if (frontTotalBlocks == 3 || frontTotalBlocks == 6) {
  //       $('.columnize').addClass('col-sm-6');
  //     }
  //     if (frontTotalBlocks == 2 || frontTotalBlocks == 4) {
  //       $('.columnize').addClass('col-sm-6');
  //     }
  //     if (frontTotalBlocks == 1) {
  //       $('.columnize').addClass('col-md-12');
  //     }

  //   });
  //     $('.columnize').wrapAll('<div class="row"></div>');



  // ------------------------------ EVENT BLOCK -------------------------------

  // Adds "When" and "Where" labels to front page event block if fields are populated.
  if ($('.front').length) {
    var eventTimeLabel = '<span class="event-time-label">When:&nbsp</span>'; // create time label element
    var eventLocationLabel = '<span class="event-location-label">Where:&nbsp</span>'; // create location label element
    $('.event-time:not(:empty)').prepend(eventTimeLabel); // prepend label to event time field if field is not empty
    $('.event-location:not(:empty)').prepend(eventLocationLabel); // prepend label to event location field if field is not empty
    console.log('This totally works');
  }


  // ------------------------------ LOCATIONS -------------------------------

  $('.oh-current-closed').remove();

   // Adds a class to location titles that are flagged as open store hours to add spacing

  $('.views-row').each(function() {
    $(this).find('.oh-current-open').first().parents().eq(1).next('div').children('.location-title').addClass('open-location-title');
    $(this).find('.oh-current-open').first().parents().eq(2).addClass('open-location');
  });


  // ------------------------------ ICONS -------------------------------

  // creates variables to store Glyphicon elements
  var locationIcon = '<span class="glyphicon glyphicon-map-marker" title="Locations"></span>'; // Verified
  var eventsIcon = '<span class="glyphicon glyphicon-calendar" title="events"></span>'; // Verified
  var galleryIcon = '<span class="glyphicon glyphicon-camera" title="Gallery"></span>'; // Verified
  var phoneIcon = '<span class="glyphicon glyphicon-iphone"></span>';
  var emailIcon = '<span class="glyphicon glyphicon-envelope"></span>';
  var addressIcon = '<span class="glyphicon glyphicon-address-book"></span>';
  var homeIcon = '<span class="glyphicon glyphicon-home" title="Home"></span>';
  var blogIcon = '<span class="glyphicon glyphicon-conversation"></span>';
  var cartIcon = '<span class="glyphicon glyphicon-shopping-cart"></span>';
  var bagIcon = '<span class="glyphicon glyphicon-shopping-bag"></span>';
  var announceIcon = '<span class="glyphicon glyphicon-bullhorn"></span>&nbsp;'; // Verified
  var accountIcon = '<span class="glyphicon glyphicon-cogwheels"></span>';
  var moreIcon = '<span class="glyphicon glyphicon-plus"></span>';
  var userIcon = '<span class="glyphicon glyphicon-user" title="My account"></span>';
  var logoutIcon = '<span class="glyphicon glyphicon-log-out" title="Log out"></span>';

  // Adds a span around nav link content for hiding
  $('ul.menu').children('li').children('a').wrapInner('<span class="hide-small"></span>');
  $('nav a span:contains("Home")').addClass('hide-small-home');
  $('.secondary').prepend('<li class="divider"></li>');


  // Adds icons to elements
  $('.pane-locations').find('.pane-title').prepend(locationIcon);
  $('.pane-calendar').find('.pane-title').prepend(eventsIcon);
  $('.gallery_slider_block').find('.block-title').prepend(galleryIcon);
  $('.announcements-block').find('.block-title').prepend(announceIcon);
  $('.more-link a').prepend(moreIcon);
  $('nav a:contains("Home")').prepend(homeIcon);
  $('nav a:contains("Location")').prepend(locationIcon);
  $('nav a:contains("Events")').prepend(eventsIcon);
  $('nav a:contains("Gallery")').prepend(galleryIcon);
  $('nav a:contains("My account")').prepend(userIcon);
  $('nav a:contains("Log out")').prepend(logoutIcon);




// ------------------------------ NODE DETAIL BLOCS -------------------------------

// makes location and hours blocks the same height on location pages
  var locationHeight = $(".location_section").height();
  var hoursHeight = $(".hours_section").height();
    if (locationHeight > hoursHeight) { 
      $(".hours_section").height(locationHeight)
    }
    else { 
      $(".location_section").height(hoursHeight)
    };

// makes location and dates blocks the same height on location pages
  var locationHeight = $(".location_section").height();
  var dateHeight = $(".date_section").height();
    if (locationHeight > dateHeight) { 
      $(".date_section").height(locationHeight)
    }
    else { 
      $(".location_section").height(dateHeight)
    };



// $(window).load(function(){
//   var logoHeight = $('.logo').height();
//   $('.main-container').css('margin-top', logoHeight + 'px');
// });



 


  // Adds container wrapper to announcements block
  $('.announcements-block').wrapInner(function() {
    return '<div class="container"></div>';
  });


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

  $('body').hide();
  $('body').fadeIn(1000);












  }
};


})(jQuery, Drupal, this, this.document);
