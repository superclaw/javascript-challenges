import "../scss/style.scss"
import "./utils/prism.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {createBurger} from "./modules/header/init-page-menu.js";
import {initFilter} from "@/script/modules/filter/init-filter.js";
import {initSlider} from "@/script/modules/slider/init-slider.js";

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    createBurger();

    if (window.location.pathname.includes('data')) {
      initFilter();
    }

    if (window.location.pathname.includes('library')) {
      initSlider();
    }
  });
});
