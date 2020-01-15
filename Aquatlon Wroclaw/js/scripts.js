(function($) {
  "use strict";

  $(window).on("load", function() {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $(".spinner-wrapper");
      setTimeout(function() {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });

  $(window).on("scroll load", function() {
    if ($(".navbar").offset().top > 20) {
      $(".fixed-top").addClass("top-nav-collapse");
    } else {
      $(".fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(function() {
    $(document).on("click", "a.page-scroll", function(event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          600,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  $(".navbar-nav li a").on("click", function(event) {
    if (
      !$(this)
        .parent()
        .hasClass("dropdown")
    )
      $(".navbar-collapse").collapse("hide");
  });

  $("#js-rotating").Morphext({
    animation: "fadeIn",
    separator: ",",
    speed: 2000,
    complete: function() {}
  });

  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows"
  });

  $(".filters-button-group").on("click", "a", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "a", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });

  var a = 0;
  $(window).scroll(function() {
    if ($("#counter").length) {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function() {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },
            {
              duration: 2000,
              easing: "swing",
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            }
          );
        });
        a = 1;
      }
    }
  });

  $("body").prepend(
    '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
  );
  var amountScrolled = 700;
  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $("a.back-to-top").fadeIn("500");
    } else {
      $("a.back-to-top").fadeOut("500");
    }
  });

  $(".button, a, button").mouseup(function() {
    $(this).blur();
  });
})(jQuery);
