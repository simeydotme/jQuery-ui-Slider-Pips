#jQuery-ui-Slider-Pips
  
##Plugin for adding little 'pips' and numbers to a jQuery UI slider widget.      
  
  
This plugin 'extends' the jQuery UI Slider widget.    
check out the Demo at: http://sites.simey.me/jquery-pip/   
  
------------------------------------  
  
###Requirements:
  - jQuery (1.9+)
  - jQuery UI (1.10+)
  - A Reason to use it
  
------------------------------------  
  
###Usage:   
Include the plugin javascript file after jquery-ui.   
Include the CSS file, edit as you please.  
  
  
```javascript  
// First of all attach a slider to an element.
$('.element').slider({opts});

// Then you can give it pips and numbers!
$('.element').slider('pips', {    
    first: 'number',
    last: 'number',  
    rest: 'pip'  
  });  
```
  
The method takes the options: `first, last, rest` with the value of:  
- `"pip"` - adds a pip. (default)    
- `"number"` - adds a pip and a number. (default)   
- `false` - hides the number and pip. (default)  

  
  
------------------------------------

###Compatibility:   
Modern Browsers, IE7+ 
_(will need some CSS work for IE7 display issues (`display: inline-block;`)_





