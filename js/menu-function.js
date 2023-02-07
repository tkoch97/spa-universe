import {menuList} from "./elements.js"
const elements = {
}

const hidden = () => {
  menuList.classList.remove('menu-list-bottomup');
  menuList.classList.add('menu-list-hidden');
}

const handleMenuMobile = () => {
  if (menuList.classList.contains('menu-list-hidden')) {
    menuList.classList.remove('menu-list-hidden');
    menuList.classList.add('menu-list-topdown');
  } else {
    menuList.classList.remove('menu-list-topdown');
    menuList.classList.add('menu-list-bottomup');
    setTimeout(function(){
      menuList.classList.remove('menu-list-bottomup');
      menuList.classList.add('menu-list-hidden')
    },800)
  }
}

export {
  handleMenuMobile,
}