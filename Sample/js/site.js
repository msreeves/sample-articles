(function($) {
  $(document).ready(function() {
    $("ul.dropdown-menu [data-toggle=dropdown]").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this)
        .parent()
        .siblings()
        .removeClass("open");
      $(this)
        .parent()
        .toggleClass("open");
    });
  });
})(jQuery);

$(".carousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: false,
  arrows: true,
  focusOnSelect: true
});

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  dots: false,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true
      }
    }
  ]
});

jQuery(function() {
  jQuery(".click-to-reveal").click(function() {
    jQuery(this)
      .children()
      .toggleClass("rotate");
    jQuery(this)
      .next("div.click-to-reveal-block")
      .toggle();
  });
});

jQuery(function() {
  jQuery(".faqs h3").click(function() {
    jQuery(this)
      .next("div")
      .toggle();
  });
});

$("#inpt_search").on("focus", function() {
  $(this)
    .parent("label")
    .addClass("active");
});

$("#inpt_search").on("blur", function() {
  if ($(this).val().length == 0)
    $(this)
      .parent("label")
      .removeClass("active");
});

function myFunction() {
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(".nav-item.dropdown").hover(
  function() {
    $(".backDrop").addClass("active");
  },
  function() {
    $(".backDrop").removeClass("active");
  }
);

$(".navbar-toggler").on("click", function(e) {
  $(".navbar").toggleClass("show");
  $("body").toggleClass("overflow");
  $(".nav-item .back").hide();
  e.preventDefault();
});

$(".nav-item .dropdown-toggle").on("click", function(e) {
  $(".nav-item .back").show();
  e.preventDefault();
});

$(".mobileMenu .close").on("click", function(e) {
  $(".navbar").removeClass("show");
  $("body").removeClass("overflow");
  $(".nav-item .back").hide();
  e.preventDefault();
});

$(".nav-item .back").on("click", function(e) {
  $(".dropdown-menu.show").removeClass("show");
  $(".nav-item .back").hide();
  e.preventDefault();
});
