// const topImg1 = document.querySelector('.top__img1');
// const topImg2 = document.querySelector('.top__img2');
// const topImg3 = document.querySelector('.top__img3');

const mySwiper = new Swiper(".swiper-container", {
  loop: true,
  centeredSlides: true,
  speed: 4000,
  slidesPerView: 1,
  effect: 'fade',
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // breakpoints: {
  //   300: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   900: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   1280: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   },
  // }
});

// mySwiper.on('slideChange', function () {
//   topImg1.classList.add('changed');
// });

// mySwiper.on('slideChangeTransitionEnd', function () {
//   topImg1.classList.remove('changed')
// });