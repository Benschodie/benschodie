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

// ******************
// Type Writer Effect
// ******************

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  //Current index of Word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add Char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word ist complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to the next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 400;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.heading__txtType');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  console.log(words);
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
