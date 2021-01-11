let frontEnd = document.getElementById('welcome');
quote.style.visibility = 'hidden';
let image = document.getElementById('img')
let arr = [];

let menu = document.getElementById('btn');
let logo = document.getElementById('art');

function logoMotion(evt){
    evt.target.classList.add('slide 3s');
}

menu.addEventListener('click', logoMotion);



//frontEnd.addEventListener('mouseover', changeSize);





    