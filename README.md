# jQuery Fadeloader v1.0.0: a simple site preloader plugin

The jQuery Fadeloader plugin lets you easily implement a preloader to your site or section, using a 
cascade fade in effect to show specific blocks of content (for example, you can load first the header, 
then the menu and finally the content).

##Usage

Fist include the required files on your page's HEAD ("easing" is optional):
``` html
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'></script>
<script src='jquery.fadeloader.js'></script>
```

Then assign a class name to each of your elements using the alphabet. Let's say...
``` html
<body>
	<div class="a"><img class="let" src="http://imageshack.us/a/img577/8746/80670611.jpg"></div>
	<div class="b"><img class="let" src="http://imageshack.us/a/img46/5216/37226104.jpg"></div>
	<div class="c"><img class="let" src="http://imageshack.us/a/img41/5663/51030348.jpg"></div>
	<div class="d"><img class="let" src="http://imageshack.us/a/img9/7412/73031581.jpg"></div>
	<div class="e"><img class="let" src="http://imageshack.us/a/img607/2171/14947433.jpg"></div>
	<div class="f"><img class="let" src="http://imageshack.us/a/img809/60/16218923.jpg"></div>
	<div class="g"><img class="let" src="http://imageshack.us/a/img46/5216/37226104.jpg"></div>
	<div class="h"><img class="let" src="http://imageshack.us/a/img41/5663/51030348.jpg"></div>
	<div class="i"><img class="let" src="http://imageshack.us/a/img9/7412/73031581.jpg"></div>
	<div class="j"><img class="let" src="http://imageshack.us/a/img24/6335/45762992.jpg"></div>
</body>
```

Now hide them all with CSS:
``` css
body > div {
	display: none;
}
	
```

Finally set the Fadeloader in the 'document ready' event. This is the basic usage:
``` javascript
$(document).ready(function() {
	$('body').fadeloader({ });
});
```
That's it! Enjoy.

##Reference

<table>

 <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
 </tr>
  
 <tr>
    <td>mode</td>
    <td>string</td>
    <td>'class'</td>
    <td>Selection mode. 'Class' would search for elements with alphabetical classes (a, b, c...) inside the parent element ('body' in this case), while 'children' would select all his children.</td>
 </tr>
 
 <tr>
    <td>fadeSpeed</td>
    <td>integer</td>
    <td>500</td>
    <td>The speed of the fade effect.</td>
 </tr>

  <tr>
    <td>easeLoad</td>
    <td>string</td>
    <td>'linear'</td>
    <td>Defines easing. Using advanced effects requires 'JQuery Easing' plugin. Options: please visit http://api.jqueryui.com/easings/</td>
 </tr>

 <tr>
    <td>displayType</td>
    <td>string</td>
    <td>'block'</td>
    <td>Defines which display style for the affected elements. Options: 'block', 'inline-block', 'inline', 'table', 'inline-table', 'list-item', 'inherit', etc. </td>
 </tr>
  
 <tr>
    <td>preLoader</td>
    <td>boolean</td>
    <td>true</td>
    <td>When 'true', a preloader image will be displayed until the window is completely loaded. Options: 'true' or 'false'.</td>
 </tr>

 <tr>
    <td>preloadImg</td>
    <td>string</td>
    <td>'loading.gif'</td>
    <td>Path to the image used as preloader. Defaul 'loading.gif' is provided along with this plugin.</td>
 </tr>

  <tr>
    <td>preloadWidth</td>
    <td>integer</td>
    <td>50</td>
    <td>Width in pixels of the preloader image.</td>
 </tr>

   <tr>
    <td>preloadHeight</td>
    <td>integer</td>
    <td>50</td>
    <td>Height in pixels of the preloader image.</td>
 </tr>
 
 <tr>
    <td>preloadCustom</td>
    <td>'string' (HTML only)</td>
    <td>''</td>
    <td>Paste here your HTML to use your own preloader. Remember to set 'preloader' as the class name for the main element.</td>
 </tr>

 <tr>
    <td>onComplete</td>
    <td>'string'</td>
    <td>''</td>
    <td>Callback function, executed after all ellements have been loaded.</td>
 </tr>

</table>
