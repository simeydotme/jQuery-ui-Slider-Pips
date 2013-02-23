



$(document).ready( function() {


		prettyPrint();

		$('.slider1').slider({ max: 10, min: 0, value: 0 }).slider('pips', { rest: 'number' });

		$('.slider2').slider({ max: 200, min: 0, value: 0 }).slider('pips');

		$('.slider3').slider({ max: 45, min: 0, range: true, values: [10, 35] }).slider('pips', { rest: false });

		$('.slider4').slider({ max: 10, min: 0, value: 10, range: "min", orientation: 'vertical' }).slider('pips', { rest: 'number' });

		$('.slider5').slider({ max: 45, min: 0, range: true, values: [10, 35], orientation: 'vertical' }).slider('pips', { rest: false });

		$('.slider6').slider({ max: 17, min: 0, orientation: 'vertical' }).slider('pips', { first: 'pip', last: 'pip' });



		$('pre').hide();
		$('hr').before( function() {
			
			var $a = $('<button>show code examples</button>');
			$a.on('click', function() {
				$('pre, br').fadeToggle();	
			});
			
			return $a;
			
		});

});





