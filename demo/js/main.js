



$(document).ready( function() {


		prettyPrint();
		
		$.extend( $.ui.slider.prototype.options, { animate: true });

		$('.slider1')	.slider({ max: 10, min: 0, value: 3 }).slider('pips');
		
		$('.slider2')	.slider({ max: 6, min: -6, value: 0 }).slider('pips', { rest: 'label' });
		
		$('.slider21')	.slider({ max: 12, min: 1, value: 3 }).slider('pips', { rest: 'label', labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] });

		$('.slider3')	.slider({ max: 45, min: 0, range: true, values: [10, 35] }).slider('pips', { rest: false });

		$('.slider4')	.slider({ max: 20, min: 0, value: 10, range: "min" }).slider('pips', { first: 'pip', last: 'pip' });

		$('.slider41')	.slider({ max: 200, min: -200, value: 0, step: 100, range: "min" }).slider('pips', { rest: 'label', prefix: "$" , suffix: ".00" });

		$('.slider5')	.slider({ max: 10, min: 0, range: true, values: [2, 8], orientation: 'vertical' }).slider('pips', { rest: false });

		$('.slider6')	.slider({ max: 10, min: 0, orientation: 'vertical' }).slider('pips', { first: 'pip', last: 'pip' });

		$('.slider7')	.slider({ max: 10, min: 0, range: true, values: [2, 8] }).slider('float');

		$('.slider8')	.slider({ max: 20, min: 0 }).slider('pips').slider('float');

		$('.slider9')	.slider({ max: 72, min: 0, value: 26 }).slider('pips', { rest: false, prefix: "&deg;" , suffix: "c" }).slider('float', { labels: false, prefix: "&deg;" , suffix: "c" });

});





