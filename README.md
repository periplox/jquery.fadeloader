# jQuery Fadeloader: a simple site preloader plugin

The jQuery Fadeloader plugin lets you easily implement a preloader to your site or section, using a 
cascade fade in effect to show specific blocks of content (for example, you can load first the header, 
then the menu and finally the content).

##Usage

Fist include the required files on your page's HEAD ("easing" is optional).
``` html
<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'></script>
<script src='jquery.fadeloader.js'></script>
```

Then set the class names of the elements to fade like this:
``` html
<body>
	<div class="a con"><img class="let" src="http://imageshack.us/a/img577/8746/80670611.jpg"></div>
	<div class="b con"><img class="let" src="http://imageshack.us/a/img46/5216/37226104.jpg"></div>
	<div class="c con"><img class="let" src="http://imageshack.us/a/img41/5663/51030348.jpg"></div>
	<div class="d con"><img class="let" src="http://imageshack.us/a/img9/7412/73031581.jpg"></div>
	<div class="e con"><img class="let" src="http://imageshack.us/a/img607/2171/14947433.jpg"></div>
	<div class="f con"><img class="let" src="http://imageshack.us/a/img809/60/16218923.jpg"></div>
	<div class="g con"><img class="let" src="http://imageshack.us/a/img46/5216/37226104.jpg"></div>
	<div class="h con"><img class="let" src="http://imageshack.us/a/img41/5663/51030348.jpg"></div>
	<div class="i con"><img class="let" src="http://imageshack.us/a/img9/7412/73031581.jpg"></div>
	<div class="j con"><img class="let" src="http://imageshack.us/a/img24/6335/45762992.jpg"></div>
</body>
```
