export const reviewsSlider = () => {
  new Swiper(".reviews__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".reviewsSlider-button--prev",
      nextEl: ".reviewsSlider-button--next",
    },
  });
};
