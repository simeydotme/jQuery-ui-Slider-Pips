jQuery-ui-Slider-Pips
=====================
  
Plugin for adding little 'pips' and numbers to a jQuery UI slider widget.    
   
// ____________________________________________________________________________ 
// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''  
// 1                                                                             100
  
-------------------------------------
  
  
This plugin 'extends' the jQuery UI Slider widget.    
check out the Demo at: http://sites.simey.me/jquery-pip/    
  
  
------------------------------------  
  
  
Requirements:
jQuery (1.9)
jQuery UI (1.10)
A Reason :P
  
  
------------------------------------  
  
  
Usage:   
Include the plugin javascript file after jquery-ui.   
Include the CSS file, edit as you please.  
  
  
`$('.element').slider({opts}).slider('pips', { first: 'number', last: 'number', rest: 'pip' });`  
  
The method takes the options: `first, last, rest` with the value of:  
`"pip"` - adds a pip.  
`"number"` - adds a pip and a number.  
`false` - hides the number and pip.  

  
  
------------------------------------

Tested:   
Chrome, Firefox, IE8+  
  
   
Would need some work for IE7 styling issues (`display: inline-block;`)





