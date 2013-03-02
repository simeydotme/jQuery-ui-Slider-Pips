/* jquery slider pips plugin, version 0.1 */
	
	(function($) {
		
		var extensionMethods = {
			
			pips: function( settings ) {
				
				options = {
					
					first: 	"number", 	// "pip" , false
					last: 	"number", 	// "pip" , false
					rest: 	"pip" 		// "number" , false
					
				};
				
				$.extend( options, settings );
				
				// get rid of all pips that might already exist.
				this.element.addClass('ui-slider-pips').find( '.ui-slider-pip' ).remove();
				
				// we need teh amount of pips to create.
				var pips = this.options.max - this.options.min;					
				 
					// for every stop in the slider; we create a pip.
					for( i=0; i<=pips; i++ ) {
						
						// hold a span element for the pip
						var s = $('<span class="ui-slider-pip"><span class="ui-slider-line"></span><span class="ui-slider-number">'+i+'</span></span>');
						
						// add a class so css can handle the display
						// we'll hide numbers by default in CSS, and show them if set.
						// we'll also use CSS to hide the pip altogether.
						if( 0 == i ) {
							s.addClass('ui-slider-pip-first');
							if( "number" == options.first ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.first ) { s.addClass('ui-slider-pip-hide'); }
						} else if ( pips == i ) {
							s.addClass('ui-slider-pip-last');
							if( "number" == options.last ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.last ) { s.addClass('ui-slider-pip-hide'); }
						} else {
							if( "number" == options.rest ) { s.addClass('ui-slider-pip-number'); }
							if( false == options.rest ) { s.addClass('ui-slider-pip-hide'); }
						}
						
						
						// if it's a horizontal slider we'll set the left offset,
						// and the top if it's vertical.
						if( this.options.orientation == "horizontal" ) 
							s.css({ left: '' + (100/pips)*i + '%'  });
						else
							s.css({ top: '' + (100/pips)*i + '%'  });
						
						
						// append the span to the slider.
						this.element.append( s );
					
					}
				
			}
			
			
		};
	
		$.extend(true, $['ui']['slider'].prototype, extensionMethods);
	
	
	})(jQuery);
	
		
		
