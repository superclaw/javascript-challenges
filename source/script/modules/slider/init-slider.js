import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function initSlider() {
  const container = document.querySelector('[data-card-slider="parent"]');
  const wrapper = container.querySelector('[data-card-slider="wrapper"]');
  const slide = container.querySelector('[data-card-slider="slide"]');
  const nextBtn = container.querySelector('[data-card-slider="next"]');
  const prevBtn = container.querySelector('[data-card-slider="prev"]');
  let swiperInstance;

  function initSwiper() {
    swiperInstance = new Swiper(container, {
      loop: true,
      wrapperClass: wrapper.className,
      slideClass: slide.className,
      spaceBetween: 10,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1341: {
          slidesPerView: 3,
        },
      },
    });
  }

  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) {
    initSwiper();
  }

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      if (!swiperInstance) {
        initSwiper();
      }
    } else if (swiperInstance) {
      swiperInstance.destroy();
      swiperInstance = null;
    }
  });
}
