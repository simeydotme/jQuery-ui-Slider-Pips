#jQuery-ui-Slider-Pips
  
##Plugin for adding little 'pips' and numbers to a jQuery UI slider widget.      
  
  
This plugin 'extends' the jQuery UI Slider widget.    
check out the Demo at: http://sites.simey.me/jquery-pip/   
  
------------------------------------  
  
###Changlog:  
- March 10, 2013
  - [Added extension for 'floating' numbers](https://github.com/simeydotme/jQuery-ui-Slider-Pips/commit/aeacad87d47d79a96b9f26d2d83a5c3206d9f90f)
  - [Fixed so that sliders can start with negative numbers](https://github.com/simeydotme/jQuery-ui-Slider-Pips/commit/aeacad87d47d79a96b9f26d2d83a5c3206d9f90f)

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
  
  
// And finally can add floaty numbers (if desired)
$('.element').slider('float', {    
    handle: true,
    numbers: true  
});
```

#####Pips method takes the options: `first, last, rest` with the values of:  
- `"pip"` - adds a pip. (default for `rest`)    
- `"number"` - adds a pip and a number. (default for`first` & `last`)   
- `false` - hides the number and pip.

#####Float method takes the options: `handle, numbers` with the values of:  
- `true` - adds floaty number. (default)    
- `false` - no floaty number.
  
  
------------------------------------

###Customisation:  
All customisation should be done to the CSS file, or in your own CSS.  
The base styles I've provided do a decent job in the Demo,   
but they will need tweaking to suit your needs and UI theme.  
  
------------------------------------

###Compatibility:   
Modern Browsers, IE7+   
_(will need some CSS work for IE7 display issues (`display: inline-block;`)_





