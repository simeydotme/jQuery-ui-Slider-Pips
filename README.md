# jQuery UI Slider Pips
#### Plugin to add "pips" or "floats" to a JQUI Slider.

[![Join the chat at https://gitter.im/simeydotme/jQuery-ui-Slider-Pips](https://badges.gitter.im/simeydotme/jQuery-ui-Slider-Pips.svg)](https://gitter.im/simeydotme/jQuery-ui-Slider-Pips?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
    
  
This plugin **extends** the [jQuery UI Slider widget](http://jqueryui.com/slider/).  
Use it for creating a nicely-styled slider like shown below  
[Documentation, Demos and Examples here](http://simeydotme.github.io/jQuery-ui-Slider-Pips/)

--- 

#### Want to contribute?:  
Please make sure to create a JSFiddle to demonstrate any problems, or pull requests, with this as a base: http://jsfiddle.net/simeydotme/Lh6pygef/ (press **fork** on the toolbar)

---

![Default settings for the plugin](http://files.simey.me/pips.jpg "Example of Pips plugin with default options")
![Example of the slider in use](https://cloud.githubusercontent.com/assets/2817396/3999716/d887ebf2-2952-11e4-9044-0c1b6baba99a.gif "Slider being used by a person with a mouse")

### Install
If you're using [Bower](http://bower.io) you can install this plugin quickly from the command-line! :)
```bash
bower install jquery-ui-slider-pips --save
```

Otherwise, you may download the files in the `/dist/` folder.

------------------------------------  
  
### Requirements:
  - jQuery (1.9+)
  - jQuery UI (1.10+)
  
------------------------------------  
  
### Usage:   
Include the plugin javascript file __after__ jQuery & jQuery-ui.   
Include the CSS file; edit as you please.  
_Below methods are chainable, I've shown them separate for clarity_
  
#### Default usage:

```html
<!-- this widget needs an empty div tag. 
    Note the class used on this div and on the jquery 
    selectors below need to be the same... -->
<div class="element"></div>
```

```javascript
// if you just want the defaults, copy & paste this code.
$('.element').slider().slider('pips').slider('float');
```

#### Advanced usage with options:
```javascript

// First of all attach a slider to an element. 
// If you want to set values, you do it in the initialization.
$('.element').slider({
    min: 20, 
    max: 65,
    values: [30, 40, 50]
});

// Then you can give it pips and labels!  
$('.element').slider('pips', {  
    first: 'label',  
    last: 'label',  
    rest: 'pip',  
    labels: ['label1', 'label2', ...],  
    prefix: "",  
    suffix: ""  
});

// And finally can add floaty numbers (if desired)  
$('.element').slider('float', {  
    handle: true,  
    pips: true,  
    labels: ['label1', 'label2', ...],  
    prefix: "",  
    suffix: ""  
});
```

#### Options for pips:  
**first:** `"pip"` or `"label"` or `false`  
**last:** `"pip"` or `"label"` or `false`  
**rest:** `"pip"` or `"label"` or `false`  
**labels:** `[]` or `{first: "", last: "", rest: [] }` or `false`  
**prefix:** `"string"`  
**suffix:** `"string"`  
**formatLabel:** `function(val){ return this.prefix + val + this.suffix }`  

####Options for float:  
**handle:** `true` or `false`  
**pips:** `true` or `false`  
**labels:** `[]` or `{first: "", last: "", rest: [] }` or `false`  
**prefix:** `"string"`  
**suffix:** `"string"`  
**formatLabel:** `function(val){ return this.prefix + val + this.suffix }`  


  
  
------------------------------------

### Style Customisation:  
All customisation should be done to the CSS file, or in your own CSS.  
The base styles I've provided do a decent job in the Demo,   
but they may need tweaking to suit your needs and UI theme.  
For some inspiration and help with styling, [go to the styling section of the documentation.](http://simeydotme.github.io/jQuery-ui-Slider-Pips/#styling)
  
------------------------------------

### Compatibility:   
Modern Browsers, IE7+   
_(To really support IE7 you will need to do some CSS changes.)_

------------------------------------

### License:  
Open Source MIT.  
http://opensource.org/licenses/MIT

