$(document).ready(function() {
  slidebar();

  /* Change navbar with scroll */
  var navbar_selector = $(".ms-navbar");
  var body_selector = $("body");

  var navbarFixed = $(".ms-site-container").hasClass("ms-nav-fixed");

  $(window).scroll(function() {
    if (!navbarFixed) {
      if ($(window).scrollTop() > 120) {
        navbar_selector.addClass("shrink");
        body_selector.addClass("bd-scroll");
        navbar_selector.addClass("fixed-top");
      }
      if ($(window).scrollTop() < 121) {
        navbar_selector.removeClass("shrink");
        body_selector.removeClass("bd-scroll");
        navbar_selector.removeClass("fixed-top");
      }
    }
  });
});

function slidebar() {
  var slidebar = $(".ms-slidebar");
  var site = $(".ms-site-container");
  var toggles = $(".ms-toggle-left");
  var clickToggle = false;
  var open = false;
  toggles.click(function() {
    if (!open) {
      slidebar.addClass("open");
      open = true;
    } else {
      slidebar.removeClass("open");
      open = false;
    }
    clickToggle = true;
  });
  site.click(function() {
    if (!clickToggle && open) {
      slidebar.removeClass("open");
      open = false;
    }
    clickToggle = false;
  });
}
