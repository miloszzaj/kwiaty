//zmiana koloru nav bar po scrollu
const navBar = document.querySelector('.nav');
const addNavbarBgrColor = () => {
	// console.log(`win`, window.screenY);

	if (window.scrollY > 100) {
		navBar.classList.add('nav__bgr');
		console.log(`win`, window.scrollY);
	}
	if (window.scrollY < 100) {
		navBar.classList.remove('nav__bgr');
		console.log(`win`, window.scrollY);
	}
};

window.addEventListener('scroll', addNavbarBgrColor);
