import { handleMenuMobile } from "./menu-function.js";
import {menuMobile } from "./elements.js";

export function Events () {
  menuMobile.addEventListener('click', handleMenuMobile);
}