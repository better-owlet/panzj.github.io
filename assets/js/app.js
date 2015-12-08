(function($) {
  "use strict";
  $(document).ready(function() {
    var $window = $(window);
    var winHeight = parseInt($window.height());
    var $topLink = $('.toplink');
    var $htmlBody = $('html, body');
    $window.on('scroll', function(event) {
      event.preventDefault();
      var scrollTop = $window.scrollTop();
      $topLink.toggleClass('active', (scrollTop >= winHeight));
    });
    $topLink.on('click', function(event) {
      event.preventDefault();
      $htmlBody.animate({
        scrollTop: 0
      }, 800);
    });

    // Remove "no-js" CSS fallback class
    $('body').removeClass('no-js');

    // Navigation dropdown
    menuDropdown();

    // Search form toggle
    $('#search-toggle').click(function(e) {
      var searchToggle = $(this),
        searchBox = $('.search-box'),
        searchField = searchBox.find('.search-field');

      if (searchToggle.hasClass('icon-cancel')) {
        searchBox.slideUp();
        searchToggle.removeClass('icon-cancel').addClass(
          'icon-search');
      } else {
        if ($('#menu-toggle').hasClass('icon-cancel')) {
          $('#menu-toggle').removeClass('icon-cancel').addClass(
            'icon-list');
          $('.nav-menu').slideUp(400, function() {
            searchBox.slideDown();
            searchField.focus();
            searchToggle.addClass('icon-cancel').removeClass(
              'icon-search');
          });
        } else {
          searchBox.slideDown();
          searchField.focus();
          searchToggle.addClass('icon-cancel').removeClass(
            'icon-search');
        }
      }
      e.preventDefault();
    });

    // Mobile navigation toggle
    $('#menu-toggle').click(function() {
      var menuToggle = $(this),
        menu = $('.nav-menu');

      if (menuToggle.hasClass('icon-cancel')) {
        menu.slideUp();
        menuToggle.removeClass('icon-cancel').addClass('icon-list');
      } else {
        if ($('#search-toggle').hasClass('icon-cancel')) {
          $('#search-toggle').removeClass('icon-cancel').addClass(
            'icon-search');
          $('.search-box').slideUp(400, function() {
            menu.slideDown();
            menuToggle.addClass('icon-cancel').removeClass(
              'icon-list');
          });
        } else {
          menu.slideDown();
          menuToggle.addClass('icon-cancel').removeClass('icon-list');
        }
      }
    });

    $(window).bind('resize orientationchange', function() {
      menuDropdown();
      if ($('#menu-toggle').is(':hidden')) {
        $('#menu-toggle').removeClass('icon-cancel').addClass(
          'icon-list');
        $('.nav-menu').removeAttr('style');
      }
    });

    $(".rslides").responsiveSlides({
      speed: 500, // Integer: Speed of the transition, in milliseconds
      timeout: 4000, // Integer: Time between slide transitions, in milliseconds
      nav: true, // Boolean: Show navigation, true or false
      prevText: "<i class='icon-angle-left' aria-hidden='true'></i>", // String: Text for the "previous" button
      nextText: "<i class='icon-angle-right' aria-hidden='true'></i>", // String: Text for the "next" button
    });

  });


  var menuDropdown = function() {
    if ($('#menu-toggle').is(':hidden')) {
      $(".nav-menu li").unbind('mouseenter mouseleave');
      $('.nav-menu li').hover(function() {
        $(this).find('ul:first').stop(true, true).slideDown(400);
      }, function() {
        $(this).find('ul:first').stop(true, true).slideUp(200);
      });
    } else {
      $('.nav-menu li').unbind('mouseenter mouseleave');
      $('.nav-menu .sub-menu, .nav-menu .children').removeAttr('style');
    }
  };
}(jQuery));
