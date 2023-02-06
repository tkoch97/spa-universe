import { handleMenuMobile } from "./menu-function.js";
import { menuList, menuMobile } from "./elements.js";

export function Events () {
  menuMobile.addEventListener('click', handleMenuMobile);
}