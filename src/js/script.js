// Проверка браузера на поддержку webp

/* function testWebP(callback) {
	const webP = new Image();

	// eslint-disable-next-line no-multi-assign
	webP.onload = webP.onerror = () => {
		callback(webP.height === 2);
	};


	webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP((support) => {
	if (support === true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
}); */
@@include('jquery-3.5.1.min.js')

$(document).ready(() => {

})