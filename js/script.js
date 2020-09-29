// $(document).ready(function() {
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: false,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png"></button>',
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: true
//               }
//             }
//         ]
// });
//   });

var slider = tns({
  container: '.carousel',
  items: 1,
  slideBy: 'page',
  autoplay: true
});