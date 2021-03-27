'use strict'

let menu = document.getElementById("btn");
let dropDown = document.getElementsByClassName('dropdown');
let logo = document.getElementById("art");
let drop = document.getElementById("content");
let isAnimating = false;
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');


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
  })
	
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
};

//Menu Open Event Listener//
//Open Menu, activate animations..css animations included//

menu.addEventListener("click", function () {
	if (!isAnimating) {
		drop.style.display = "block";
		logo.classList.add("pulse");
		menuOpen();
		isAnimating = !isAnimating;
	} else {
		menuClose();
		isAnimating = !isAnimating;
	}
});
//Menu Close EventListener//

drop.addEventListener("mouseleave", () => {
	drop.style.display = "none";
	logo.classList.remove("pulse");
	menuClose();
	isAnimating = false;
});
  