document.addEventListener("DOMContentLoaded", function () {
  // Hamburger
  const headerMenu = document.querySelector("#hamburger");
  headerMenu.addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
  });

  // Generic Swiper initialization function
  function createDynamicSwiper(selector, swiperOptions = {}) {
    const element = document.querySelector(selector);
    if (element) {
      const defaultOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      };

      const finalOptions = Object.assign({}, defaultOptions, swiperOptions);

      return new Swiper(selector, finalOptions);
    } else {
      console.error(`Swiper element not found: ${selector}`);
      return null;
    }
  }

  // Hero Swiper
  createDynamicSwiper(".heroSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1500,
  });

  // Testimonial swiper
  const testimonial = new Swiper(".testimonial-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: false,
    // watchSlidesProgress: true,
  });
  const testimonialImg = new Swiper(".testimonial-img-swiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: testimonial,
    },
  });
});
