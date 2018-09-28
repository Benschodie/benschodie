// Select DOM Items
const menuBtn = document.querySelector('.menu__btn');
const menuMain = document.querySelector('.menu__main');
const menuNav = document.querySelector('.menu__nav');
const menuBranding = document.querySelector('.menu__branding');
const navItem = document.querySelectorAll('.menu__navItem');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // adding the class of close to menu__btn (its vanilla)
    menuBtn.classList.add('close');
    menuMain.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));

    // set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuMain.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));

    // set Menu State
    showMenu = false;
  }
}
