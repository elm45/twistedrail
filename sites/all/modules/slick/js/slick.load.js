/**
 * @file
 * Provides Slick loader.
 */

/*jshint -W072 */
/*eslint max-params: 0, consistent-this: [0, "_"] */
(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.slick = {
    attach: function (context, settings) {
      var _ = this;
      $(".slick:not(.unslick)", context).once("slick", function () {
        var me = $(this),
          t = $("> .slick__slider", me),
          a = $("> .slick__arrow", me),
          o = $.extend({}, settings.slick, t.data("slick"));

        // Build the Slick.
        _.beforeSlick(t, a, o);
        t.slick(_.globals(t, a, o));
        _.afterSlick(t, o);
      });
    },

    /**
     * The event must be bound prior to slick being called.
     */
    beforeSlick: function (t, a, o) {
      var _ = this,
        breakpoint;
      _.randomize(t);

      t.on("init", function (e, slick) {
        // Populate defaults + globals into each breakpoint.
        var sets = slick.options.responsive || null;
        if (sets && sets.length > -1) {
          for (breakpoint in sets) {
            if (sets.hasOwnProperty(breakpoint)
              && sets[breakpoint].settings !== "unslick") {
              slick.breakpointSettings[sets[breakpoint].breakpoint] = $.extend(
                {},
                Drupal.settings.slick,
                _.globals(t, a, o),
                sets[breakpoint].settings);
            }
          }
        }
      });

      // Fixed known arrows issue when total <= slidesToShow, and not updated.
      t.on("setPosition", function (e, slick) {
        var opt = slick.options;

        _.setCurrent(t, slick.currentSlide, slick);

        // Do not remove arrows, to allow responsive have different options.
        if (t.attr("id") === slick.$slider.attr("id")) {
          return slick.slideCount <= opt.slidesToShow || opt.arrows === false
            ? a.addClass("element-hidden") : a.removeClass("element-hidden");
        }
      });
    },

    /**
     * The event must be bound after slick being called.
     */
    afterSlick: function (t, o) {
      var _ = this,
        slick = t.slick("getSlick");

      // Arrow down jumper.
      t.parent().on("click.slick-load", ".slick-down", function (e) {
          e.preventDefault();
          var b = $(this);
          $("html, body").stop().animate({
            scrollTop: $(b.data("target")).offset().top - (b.data("offset") || 0)
          }, 800, o.easing);
        });

      if (o.mousewheel) {
        t.on("mousewheel.slick-load", function (e, delta) {
          e.preventDefault();
          return (delta < 0) ? t.slick("slickNext") : t.slick("slickPrev");
        });
      }

      t.trigger("afterSlick", [_, slick, slick.currentSlide]);
    },

    /**
     * Randomize slide orders, for ads/products rotation within cached blocks.
     */
    randomize: function (t) {
      if (t.parent().hasClass("slick--random")
        && !t.hasClass("slick-initiliazed")) {
        t.children().sort(function () {
            return 0.5 - Math.random();
          })
          .each(function () {
            t.append(this);
          });
      }
    },

    /**
     * Sets the current slide class.
     *
     * Still kept after v1.5.8 (8/4) as "slick-current" fails with asNavFor:
     *   - Create asNavFor with the total <= slidesToShow and centerMode.
     *   - Drag the main large display, or click its arrows, thumbnail
     *     slick-current class is not updated/ synched, always stucked at 0.
     *
     * @todo drop if any core fix after v1.5.8 (8/4).
     */
    setCurrent: function (t, curr, slick) {
      // Must take care for both asNavFor instances, with/without slick-wrapper,
      // with/without block__no_wrapper/ views_view_no_wrapper, etc.
      var w = t.parent().parent(".slick-wrapper").length ? t.parent().parent(".slick-wrapper") : t.parent(".slick");
      // Be sure the most complex slicks are taken care of as well, e.g.:
      // asNavFor with the main display containing nested slicks.
      if (t.attr("id") === slick.$slider.attr("id")) {
        $(".slick-slide", w).removeClass("slick-current");
        $("[data-slick-index='" + curr + "']", w).addClass("slick-current");
      }
    },

    /**
     * Declare global options explicitly to copy into responsive settings.
     */
    globals: function (t, a, o) {
      return {
        slide: o.slide,
        lazyLoad: o.lazyLoad,
        dotsClass: o.dotsClass,
        rtl: o.rtl,
        appendDots: o.appendDots === ".slick__arrow"
          ? a : (o.appendDots || $(t)),
        prevArrow: $(".slick-prev", a),
        nextArrow: $(".slick-next", a),
        appendArrows: a,
        customPaging: function (slick, i) {
          var tn = slick.$slides.eq(i).find("[data-thumb]") || null,
            alt = Drupal.t(tn.attr("alt")) || "",
            img = "<img alt='" + alt + "' src='" + tn.data("thumb") + "'>",
            dotsThumb = tn.length && o.dotsClass.indexOf("thumbnail") > 0 ?
              "<div class='slick-dots__thumbnail'>" + img + "</div>" : "";
          return dotsThumb + slick.defaults.customPaging(slick, i);
        }
      };
    }
  };

})(jQuery, Drupal);
