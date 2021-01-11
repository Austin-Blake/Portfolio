
let menu = document.getElementById('btn');
let logo = document.getElementById('art');
let drop = document.getElementById('content');
var isAnimating = false;

menu.addEventListener('click', function(evt) {
    if (isAnimating) {
      drop.style.display = 'none';
      logo.classList.remove('animate');
      logo.classList.add('pulse');
      menu.innerHTML = 'Welcome';
    } else {
      drop.style.display = 'block';
      logo.classList.remove('pulse');
      logo.classList.add('animate');
      menu.innerHTML = 'Menu';
    }
  
    isAnimating = !isAnimating;
  });




    