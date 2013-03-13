/* jquery slider pips plugin, version 0.2 */
	
	(function($) {
		
		var extensionMethods = {
			
			pips: function( settings ) {
				
				options = {
					
					first: 	"label", 	// "pip" , false
					last: 	"label", 	// "pip" , false
					rest: 	"pip", 		// "label" , false
					labels:	false		// [array]
					
				};
				
				$.extend( options, settings );
				
				// labels are needed globally potentially.
				this.options.labels = options.labels
				
				// get rid of all pips that might already exist.
				this.element.addClass('ui-slider-pips').find( '.ui-slider-pip' ).remove();
				
				// we need the amount of pips to create.
				var pips = this.options.max - this.options.min;
				 
					// for every stop in the slider; we create a pip.
					for( i=0; i<=pips; i++ ) {
						
						// create the label name, it's either the item in the array, or a number.
						var label = (this.options.labels) ? this.options.labels[i] : (this.options.min+i);
						if( typeof(label) === "undefined" ) { label = ""; }
						
						
						// hold a span element for the pip
						var s = $('<span class="ui-slider-pip ui-slider-pip-'+i+'"><span class="ui-slider-line"></span><span class="ui-slider-label">'+ label +'</span></span>');
						
						// add a class so css can handle the display
						// we'll hide labels by default in CSS, and show them if set.
						// we'll also use CSS to hide the pip altogether.
						if( 0 == i ) {
							s.addClass('ui-slider-pip-first');
							if( "label" == options.first ) { s.addClass('ui-slider-pip-label'); }
							if( false == options.first ) { s.addClass('ui-slider-pip-hide'); }
						} else if ( pips == i ) {
							s.addClass('ui-slider-pip-last');
							if( "label" == options.last ) { s.addClass('ui-slider-pip-label'); }
							if( false == options.last ) { s.addClass('ui-slider-pip-hide'); }
						} else {
							if( "label" == options.rest ) { s.addClass('ui-slider-pip-label'); }
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
	
	
	
/* jquery slider float plugin, version 0.2 */
		
	(function($) {

		var extensionMethods = {

			float: function( settings ) {

				options = { 
					handle: true, 		// false
					labels: true		// false
				};
				$.extend( options, settings );
				
				// add a class for the CSS
				this.element.addClass('ui-slider-float');
        
        
				// apply handle tip if we settings allows.
				if( options.handle ) {
					
					// if this is a range slider
					if( this.options.values ) {
					   
						var $tip = [
							$('<span class="ui-slider-tip">'+ this.options.values[0]+'</span>'),
							$('<span class="ui-slider-tip">'+ this.options.values[1]+'</span>')
						];
					  
					// else if its just a normal slider
					} else {
					
						// create a tip element
						var $tip = $('<span class="ui-slider-tip">'+ this.options.value +'</span>');
					
					}
					
					// now we append it to all the handles
					this.element.find('.ui-slider-handle').each( function(k,v) {
						$(v).append($tip[k]);
					});
				
				}
					
					
				if( options.labels ) {
						
					// if this slider also has labels, we'll make those into tips, too; by cloning and changing class.
					this.element.find('.ui-slider-label').each(function(k,v) {
						var $e = $(v).clone().removeClass('ui-slider-label').addClass('ui-slider-tip-label');
						$e.insertAfter($(v));
					});
					
				}
					
					// when slider changes, update handle tip label.
					this.element.on('slidechange slide', function(e,ui) {
						$(ui.handle).find('.ui-slider-tip').text( ui.value );
					});
					
				
        
			}


		};

		$.extend(true, $['ui']['slider'].prototype, extensionMethods);


	})(jQuery);		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
