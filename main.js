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

// map

const map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM(),
		}),
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([20.291250542460087, 53.171918057293034]),
		zoom: 17,
	}),
});
const iconFeature = new ol.Feature({
	geometry: new Point([0, 0]),
	name: 'Null Island',
	population: 4000,
	rainfall: 500,
});

var element = document.getElementById('popup');
var popup = new ol.Overlay({
	element: element,
	positioning: 'center',
	stopEvent: false,
	offset: [0, -50],
});
map.addOverlay(popup);

map.on('click', function (evt) {
	var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
		return feature;
	});
	if (feature) {
		var coordinates = feature.getGeometry().getCoordinates();
		popup.setPosition(coordinates);
		$(element).popover({
			placement: 'top',
			html: true,
			content: feature.get('name'),
		});
		$(element).popover('show');
	} else {
		$(element).popover('dispose');
	}
});
