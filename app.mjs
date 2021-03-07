"use strict";
import anime from "./node_modules/animejs/lib/anime.es.js";

/*eslint-env browser*/

let menu = document.getElementById("btn");
let dropDown = document.getElementsByClassName('dropdown');
let logo = document.getElementById("art");
let drop = document.getElementById("content");
let isAnimating = false;

//added listener to menu to display on click 
// if displayed click will hide.
//css animations included

menu.addEventListener("click", function () {
	if (isAnimating) {
		drop.style.display = "none";
		logo.classList.remove("animate");
		logo.classList.add("pulse");
		menu.innerHTML = "Menu ▼";
	} else {
		drop.style.display = "block";
		logo.classList.remove("pulse");
		logo.classList.add("animate");
		menu.innerHTML = "Welcome";
	}

	isAnimating = !isAnimating;
});

// const box = document.querySelector('.box');
// const message = document.querySelector('#message');


const list = Array.from(document.getElementsByClassName('skill'));
// const listTextContent = listUl.map((elm) => {
// 	return elm.textContent;
// });
// const listText = listTextContent.slice(0, 10);

let timeLine = () => {
	anime({
		targets: list,
		translateY: [-40, 0],
		opacity: [0.0, 1],
		delay: anime.stagger(250),
		duration: 3000,
		endDelay: 3000,
		loop: true
	});
}
window.addEventListener('load', () => {
	timeLine();
});

const hideMenu = () => {
	anime({
		targets: [menu, dropDown],
		opacity: [0, 0, 1],
		duration: 500,
		endDelay: 1000
	})
};

window.addEventListener('scroll', hideMenu);