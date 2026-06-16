import "./myBanner.js";
import "./myBurger.js";
import "./myModal.js";
import { reviewsSlider } from "./reviews__slider.js";

try {
  reviewsSlider();
} catch (error) {
  console.error(error);
}
