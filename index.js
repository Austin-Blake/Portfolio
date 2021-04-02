"use strict";
let webdev = document.getElementById('nav-banner');
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
		webdev.style.display = 'none';
		menuOpen();
		isAnimating = !isAnimating;
	} else {
		btn.map((button) => {
			button.style.backgroundColor = "rgb(0, 0, 0)";
		})
		drop.style.display = 'none';
		webdev.style.display = 'block';
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
			scale: 1.5,
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

// Creates Array from Skill list content, animates them to UI//
const list = Array.from(document.getElementsByClassName('skill'));

//Skill list animation obj.//
let timeLine = () => {
	anime({
		targets: list,
		translateY: [-40, 0],
		opacity: [0, 1],
		delay: anime.stagger(450),
		duration: 3000,
		endDelay: 5000,
		loop: true
	});
}
//Dom Load Event Listener//
//Activates List animation//

window.addEventListener('load', () => {
	timeLine();
});

// Animation Function for nav disappear on scroll and reappear//
const hideNav = () => {
	let navbar = document.getElementById("nav-bar");
	anime({
		targets: [navbar],
		opacity: [0, 1],
		duration: 1800,
		easing: 'easeInOutExpo',
		endDelay: 1500
	})
};

//Event Listener for Scroll Animation//
window.addEventListener('scroll', hideNav);

//Project Event Logic//
const reactBtn = document.getElementById('react-btn');
const reactProjects = document.getElementById('react');
const staticBtn = document.getElementById('static-btn');
const staticProjects = document.getElementById('static-projects');
const reactCloseBtn = document.getElementById('react-closebtn');
const staticCloseBtn = document.getElementById('static-closebtn');
const react = document.getElementById('project1')
const reactH1 = document.getElementById('projectH1');
const staticH1 = document.getElementById('statich1')
const staticBox = document.getElementById('static-sites');
let isReactOpen = false;
let isStaticSiteOpen = false;

//Re-Useable Functions for toggling project events//
const reactOpen = () => {
	reactProjects.style.display = 'block';
	reactCloseBtn.style.display = 'block';
	reactBtn.innerHTML = 'Close';
	isReactOpen = !isReactOpen;
};
const reactClose = () => {
	reactProjects.style.display = 'none';
	reactCloseBtn.style.display = 'none';
		reactBtn.innerHTML = 'Click to view';
		isReactOpen = !isReactOpen;
};
const staticOpen = () => {
	staticProjects.style.display = 'block';
	staticCloseBtn.style.display = 'block';
	staticBtn.innerHTML = 'Close';
	isStaticSiteOpen = !isStaticSiteOpen;
};
const staticClose = () => {
	staticProjects.style.display = 'none';
		staticCloseBtn.style.display = 'none';
		staticBtn.innerHTML = 'Click to View';
		isStaticSiteOpen = !isStaticSiteOpen;
};

//Animation for Color Flash animation//
function reactFlash() {
	return anime({
		targets: reactH1,
		  color: ["#61dbfb","#000000",
		],
		easing: 'easeOutElastic(2, .5)',
		  loop: 5
	});
}

function staticFlash() {
	return anime({
		targets: staticH1,
		color: ["#61dbfb","#000000",
	],
		easing: 'easeOutElastic(7, .5)',
		loop: 5
	});
}
//Event Listeners for Flash animation//

react.addEventListener("mouseenter", () => {
	reactFlash();
});
staticBox.addEventListener("mouseenter", () => {
	staticFlash();
});
//EventListener for React//

reactBtn.addEventListener("click", () => {
	if (!isReactOpen && isStaticSiteOpen) {
		staticClose();
		reactOpen();
	} else if (!isReactOpen) {
		reactOpen();
	} else {
		reactClose();
	}
});

reactCloseBtn.addEventListener('click', () => {
	reactClose();
})

//EventListener for Static Site//

staticBtn.addEventListener('click', () => {
	if (!isStaticSiteOpen && isReactOpen) {
		reactClose();
		staticOpen();
	} else if (!isStaticSiteOpen){
		staticOpen();
	} else {
		staticClose();
	}
})
staticCloseBtn.addEventListener('click', () => {
	staticClose();
})