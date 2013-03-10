



$(document).ready( function() {


		prettyPrint();

		$('.slider1').slider({ max: 100, min: 0, value: 0 }).slider('pips');

		$('.slider2').slider({ max: 6, min: -6, value: 0 }).slider('pips', { rest: 'number' });

		$('.slider3').slider({ max: 45, min: 0, range: true, values: [10, 35] }).slider('pips', { rest: false });

		$('.slider4').slider({ max: 20, min: 0, value: 10, range: "min" }).slider('pips', { first: 'pip', last: 'pip' });

		$('.slider5').slider({ max: 10, min: 0, range: true, values: [2, 8], orientation: 'vertical' }).slider('pips', { rest: false });

		$('.slider6').slider({ max: 10, min: 0, orientation: 'vertical' }).slider('pips', { first: 'pip', last: 'pip' });

		$('.slider7').slider({ max: 10, min: 0, range: true, values: [2, 8] }).slider('float');

		$('.slider8').slider({ max: 20, min: 0 }).slider('pips').slider('float');


});





