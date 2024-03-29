// --------------swiper carosel-----
var swiper = new Swiper(".mySwiper1", {
  // effect: "fade",
  spaceBetween: 30,
  // mousewheel: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ---------------swiper 2-----------------
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    clickable: true,
  },
  breakpoints: {
    
    796: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    830: {
      slidesPerView:4,
      spaceBetween: 10,
    },1226: {
      slidesPerView:5,
      spaceBetween: 10,
    },
  },
});

// ---------------------------swiper3----------
var swiper = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    clickable: true,
  },
  breakpoints: {    
    796: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    830: {
      slidesPerView:4,
      spaceBetween: 10,
    },1226: {
      slidesPerView:5,
      spaceBetween: 10,
    },
  },
});

// ---------------------swiper4--------------
var swiper = new Swiper(".mySwiper4", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    clickable: true,
  },
  breakpoints: {    
    796: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    830: {
      slidesPerView:4,
      spaceBetween: 10,
    },1226: {
      slidesPerView:5,
      spaceBetween: 10,
    },
  },
});