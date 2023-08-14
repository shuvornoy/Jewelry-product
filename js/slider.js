$(document).ready(function () {
    $(".person-slider").slick({
      slidesToShow: 3,
      asNavFor: ".text-slider",
      centerMode: true,
      centerPadding: "0px",
      arrows: false,
      dots: true,
  
    });
    $(".text-slider").slick({
      asNavFor: ".person-slider",
      arrows: false,
      // focusOnSelect: true,
    });
  });
  