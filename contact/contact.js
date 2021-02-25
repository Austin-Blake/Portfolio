'use strict'

let menu = document.getElementById('btn');
let logo = document.getElementById('art');
let drop = document.getElementById('content');
var isAnimating = false;

menu.addEventListener('click', function(evt) {
    if (isAnimating) {
      drop.style.display = 'none';
      logo.classList.remove('pulse');
      menu.innerHTML = 'Menu ▼';
    } else {
      drop.style.display = 'block';
      logo.classList.add('pulse');
      menu.innerHTML = 'Welcome';
    }
  
    isAnimating = !isAnimating;
});
  