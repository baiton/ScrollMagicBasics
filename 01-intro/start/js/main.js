$(document).ready(function(){

	let controller = new ScrollMagic.Controller();

	let ourScene =  new ScrollMagic.Scene({
		triggerElement: '#project01 img',
		duration: '90%',
		triggerHook: 0.9
	})
	.setClassToggle('#project01', 'fade-in')
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		// indent: 200,
		colorStart: '#0e770c',
		colorEnd: '#0c4377'
	}) // this requires a different script linked in the html
	.addTo(controller);

});
