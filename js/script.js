new Swiper('.swiper__container', {
	slidesPerView: 4,
	slidesPerGroup: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: ".s-button-next",
		prevEl: ".s-button-prev",
		},
	pagination: {
		el: ".s-pagination",
		type: "fraction",
		renderFraction: function(currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';}
		},

	});