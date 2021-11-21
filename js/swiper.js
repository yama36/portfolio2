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