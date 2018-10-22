jQuery(function($) {
  'use strict';

  /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

  $(function() {
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');
  });

  // -------------------------------------------------------------
  // Sticky Menu
  // -------------------------------------------------------------

  (function() {
    var nav = $('.navbar');
    var scrolled = false;

    $(window).scroll(function() {
      if (110 < $(window).scrollTop() && !scrolled) {
        nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

        scrolled = true;
      }

      if (110 > $(window).scrollTop() && scrolled) {
        nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

        scrolled = false;
      }
    });
  })();

  // -------------------------------------------------------------
  // Sticky Elements
  // -------------------------------------------------------------

  $(function() {
    $('.sticky-div').stick_in_parent({
      container: $('.sticky-container'),
      offset_top: 90
    });
  });

  // -------------------------------------------------------------
  // OffCanvas
  // -------------------------------------------------------------

  (function() {
    $('button.navbar-toggle').HippoOffCanvasMenu({
      documentWrapper: '#st-container',
      contentWrapper: '.st-content',
      position: 'hippo-offcanvas-left', // class name
      // opener         : 'st-menu-open',            // class name
      effect: 'slide-in-on-top', // class name
      closeButton: '#off-canvas-close-btn',
      menuWrapper: '.offcanvas-menu', // class name below-pusher
      documentPusher: '.st-pusher'
    });
    var ico = $('<i class="fa fa-caret-right"></i>');
    $('#offcanvasMenu li:has(ul) > a').append(ico);

    $('#offcanvasMenu > li:has(ul)').on('click', function() {
      $(this).toggleClass('open');
    });
  })();

  // -------------------------------------------------------------
  // Partner Carousel
  // -------------------------------------------------------------

  (function() {
    $('.partner-carousel').owlCarousel({
      loop: true,
      margin: 15,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
    });

    // Navigation
    var owl = $('.partner-carousel');
    owl.owlCarousel();

    // Go to the next item
    $('.partner-carousel-navigation .next').on('click', function() {
      owl.trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.partner-carousel-navigation .prev').on('click', function() {
      owl.trigger('prev.owl.carousel', [ 300 ]);
    });
  })();

  // -------------------------------------------------------------
  // Detect IE version
  // -------------------------------------------------------------
  (function() {
    function getIEVersion() {
      var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
      return match ? parseInt(match[1]) : false;
    }

    if (getIEVersion()) {
      $('html').addClass('ie' + getIEVersion());
    }

    if ($('html').hasClass('ie9') || $('html').hasClass('ie10')) {
      $('.submenu-wrapper').each(function() {
        $(this).addClass('no-pointer-events');
      });
    }
  })();

  // ------------------------------------------------------------------
  // jQuery for back to Top
  // ------------------------------------------------------------------

  (function() {
    $('body').append('<div id="toTop"><i class="fa fa-angle-double-up"></i></div>');

    $(window).scroll(function() {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });

    $('#toTop').on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
      return false;
    });
  })();

  // -----------------------------------------------------------------
  //STELLAR FOR BACKGROUND SCROLLING
  // ------------------------------------------------------------------

  $(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    } else {
      $.stellar({
        horizontalScrolling: false,
        responsive: true
      });
    }
  });

  // ----------------------------------------------------------------
  //  Dropdown menu
  // ----------------------------------------------------------------

  (function() {
    function getIEVersion() {
      var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
      return match ? parseInt(match[1]) : false;
    }

    if (getIEVersion()) {
      $('html').addClass('ie' + getIEVersion());
    }

    if ($('html').hasClass('ie9') || $('html').hasClass('ie10')) {
      $('.submenu-wrapper').each(function() {
        $(this).addClass('no-pointer-events');
      });
    }

    var timer;

    $('li.dropdown').on('mouseenter', function(event) {
      event.stopImmediatePropagation();
      event.stopPropagation();

      $(this).removeClass('open menu-animating').addClass('menu-animating');
      var that = this;

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(function() {
        $(that).removeClass('menu-animating');
        $(that).addClass('open');
      }, 300); // 300ms as animation end time
    });

    // on mouse leave

    $('li.dropdown').on('mouseleave', function(event) {
      var that = this;

      $(this).removeClass('open menu-animating').addClass('menu-animating');

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(function() {
        $(that).removeClass('menu-animating');
        $(that).removeClass('open');
      }, 300); // 300ms as animation end time
    });
  })();

  // -----------------------------------------------------------------
  //CONTACT FORM
  // ------------------------------------------------------------------

  (function() {
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();

      var $action = $(this).prop('action');
      var $data = $(this).serialize();
      var $this = $(this);

      $this.prevAll('.alert').remove();

      $.post(
        $action,
        $data,
        function(data) {
          if (data.response == 'error') {
            $this.before('<div class="alert alert-danger">' + data.message + '</div>');
          }

          if (data.response == 'success') {
            $this.before('<div class="alert alert-success">' + data.message + '</div>');
            $this.find('input, textarea').val('');
          }
        },
        'json'
      );
    });
  })();
}); // JQuery end
