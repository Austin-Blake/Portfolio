'use strict'

let menu = document.getElementById("btn");
let dropDown = document.getElementsByClassName('dropdown');
let drop = document.getElementById("content");
let isAnimating = false;

//Menu Open Event Listener//
//Open Menu, activate animations..css animations included//

menu.addEventListener("click", function () {
	if (!isAnimating) {
		btn.map((button) => {
			button.style.backgroundColor = "rgb(251, 0, 0)";
		});
		drop.style.display = 'block';
		menuOpen();
		isAnimating = !isAnimating;
	} else {
		btn.map((button) => {
			button.style.backgroundColor = "rgb(0, 0, 0)";
		})
		drop.style.display = 'none';
		menuClose();
		isAnimating = !isAnimating;
	}
});

//Menu Close EventListener//

drop.addEventListener("mouseleave", () => {
	setTimeout(() => {
		btn.map((button) => {
			button.style.backgroundColor = "rgb(0, 0, 0)";
		})
		drop.style.display = 'none';
		webdev.style.display = 'block';
	menuClose();
	isAnimating = false;
	},3000)
});

//Animation Logic//
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn = [btn1, btn2, btn3];

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
			translateX: [0, -10],
			opacity: [1, 0],
			duration: 200,
		}).add({
			targets: menu,
			scale: 1.2,
		},100)
		
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
		duration: 700
	})
		.add({
			targets: [btn2],
			translateX: '0px',
			opacity: [0, 1],
			duration: 100,
		}).add({
			targets: menu,
			scale: 1,
			duration: 700,
		},100)
}