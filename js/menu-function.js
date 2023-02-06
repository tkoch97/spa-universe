import {menuList, menuMobile} from "./elements.js"
const elements = {
}

const handleMenuMobile = () => {
  if(menuList.style.display == 'flex') {
    menuList.style.display = 'none'
  } else {
    menuList.style.display = 'flex'
  }
}

export {
  handleMenuMobile
}