$(document).ready(function () {
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".video").magnificPopup({
    type: "iframe"
  });

  $('.counter').counterUp();

  $('.testimonials').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots: true,
  });
});
