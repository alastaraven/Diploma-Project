// Инициализация слайдера на экране roadmap

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
	// options
	arrowShape: {
		x0: 20,
		x1: 50, y1: 30,
		x2: 50, y2: 25,
		x3: 25
	},

	selectedAttraction: 0.1,
	friction: 1,
	groupCells: '90%',
	pageDots: false,
	cellAlign: 'left',
	contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
	// options
});