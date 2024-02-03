var swiper = new Swiper(".mySwiper1", {
  // effect: "fade",
  spaceBetween: 30,
  mousewheel: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

