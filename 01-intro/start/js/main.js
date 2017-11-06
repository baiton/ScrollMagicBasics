$(document).ready(function(){

	let controller = new ScrollMagic.Controller();

	//pin intro
	let pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller)

	//pin again
	let pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: .4,
	})
	.setPin('#intro', {pushFollowers: false})
	.addIndicators({
		name: 'intro pin',
		colorTrigger: 'black',
		// indent: 200,
		colorStart: '#0e770c',
		colorEnd: '#0c4377'
	})
	.addTo(controller)

	//loop through each .project element
	$('.project').each(function(){

		console.log('this', [this]);

		let ourScene =  new ScrollMagic.Scene({
			triggerElement: this.children[0],
			// duration: '90%',
			triggerHook: 0.9,
			reverse: false
		})
		.setClassToggle(this, 'fade-in')
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			// indent: 200,
			colorStart: '#0e770c',
			colorEnd: '#0c4377'
		}) // this requires a different script linked in the html
		.addTo(controller);
	})

});
