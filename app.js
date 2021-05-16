const shortcut = document.querySelector('.header .nav-bar .nav-list .shortcut');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

shortcut.addEventListener('click', () => {
	shortcut.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 200) {
		header.style.backgroundColor = 'rgb(255, 225, 225)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		shortcut.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
