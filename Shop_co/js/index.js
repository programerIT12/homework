import BurgerMenu from "./burger.js";
import "./banner.js";
import { reviewsSlider } from "./reviews__slider.js";

try {
  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    lABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "header__menu-item-link",
    BREAKPOINT: 768,
    MAIN: "main",
  });
  reviewsSlider();
} catch (error) {
  console.error(error);
}
