let buttonTarget = document.querySelector('.button_target');
let sectionTwo = document.querySelector('.section__two');

buttonTarget.addEventListener('click', function() {
	// sectionTwo.scrollTop = sectionTwo.scrollHeight;
	sectionTwo.scrollIntoView({ behavior: 'smooth' });
});
