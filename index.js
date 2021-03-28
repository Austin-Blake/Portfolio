"use strict";

let menu = document.getElementById("btn");
let dropDown = document.getElementsByClassName('dropdown');
let logo = document.getElementById("art");
let drop = document.getElementById("content");
let isAnimating = false;
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn = [btn1, btn2, btn3];
//Menu Open Event Listener//
//Open Menu, activate animations..css animations included//

menu.addEventListener("click", function () {
	if (!isAnimating) {
		btn.map((button) => {
			button.style.backgroundColor = "red";
		});
		drop.style.display = 'block';
		logo.classList.add("pulse");
		menuOpen();
		isAnimating = !isAnimating;
	} else {
		btn.map((button) => {
			button.style.backgroundColor = "maroon";
		})
		drop.style.display = 'none';
		logo.classList.remove("pulse");
		menuClose();
		isAnimating = !isAnimating;
	}
});
//Menu Close EventListener//

drop.addEventListener("mouseleave", () => {
	setTimeout(() => {
		btn.map((button) => {
			button.style.backgroundColor = "maroon";
		})
	drop.style.display = 'none';
	logo.classList.remove("pulse");
	menuClose();
	isAnimating = false;
	},1000)
});

//Animation Function for Menu Open//

const menuOpen = () => {
	const open = anime.timeline({
		targets: btn1,
		translateY: '6px',
		rotate: [45],
		duration: 900,
		easing: 'easeInOutQuart'
	})
	
	open.add({
		targets: btn3,
		translateY: '-6px',
		rotate: [-45],
	})
		.add({
			targets: btn2,
			translateX: [-10],
			opacity: [1, 0],
			duration: 200
		})
};

//Animation Function for Menu Close//

const menuClose = () => {
	const close = anime.timeline({
		targets: btn1,
		translateY: '-0px',
		rotate: [0],
		duration: 300,
		easing: 'easeInOutQuart'
	},)
	
	close.add({
		targets: btn3,
		translateY: '0px',
		rotate: [0],
	})
		.add({
			targets: btn2,
		translateX: '0px',
		opacity: [0, 1],
		duration: 50
	})
}

// Creates Array from Skill list content, animation displays them to UI//
const list = Array.from(document.getElementsByClassName('skill'));

//Skill list animation obj.//
let timeLine = () => {
	anime({
		targets: list,
		translateY: [-40, 0],
		opacity: [0.0, 1],
		delay: anime.stagger(250),
		duration: 2000,
		endDelay: 1500,
		loop: true
	});
}
//Dom Load Event Listener//
//Activates List animation//

window.addEventListener('load', () => {
	timeLine();
});
// Animation Function for menu disappear on scroll and reappear//
const hideMenu = () => {
	anime({
		targets: [menu, dropDown],
		opacity: [0, 1],
		duration: 1000,
		easing: 'easeInOutExpo',
		endDelay: 1000
	})
};

//Event Listener for Scroll Animation//
window.addEventListener('scroll', hideMenu);