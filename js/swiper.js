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
});