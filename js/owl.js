// $(document).ready(function () {
//   const isCentered = window.innerWidth < 1024;

//   $(".testimonial-slider").owlCarousel({
//     loop: true,
//     margin: 60,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: false,
//     center: isCentered,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 1,
//       },
//       1024: {
//         items: 1.25,
//       },
//       1200: {
//         items: 1.5,
//       },
//       1500: {
//         items: 2,
//       },
//     },
//   });
// });

$(document).ready(function () {
  const isCentered = window.innerWidth < 1024;

  const owl = $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 60,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    center: isCentered,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 1.25,
      },
      1200: {
        items: 1.5,
      },
      1500: {
        items: 2,
      },
    },
  });

  // Custom Next Button Click
  $(document).on("click", ".testimoni-next-btn", function () {
    owl.trigger("next.owl.carousel");
  });
});
