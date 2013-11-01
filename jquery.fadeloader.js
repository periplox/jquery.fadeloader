/*//////////////////////////*/
/*//////////////////////////*/
/*/   JQuery FADELOADER    /*/
/*/          1.0.1          /*/
/*/  developed by Periplo  /*/
/*//////////////////////////*/
/*//////////////////////////*/


(function( $ ) {
  $.fn.fadeloader = function(options) {
		//Default setting
		var opts = $.extend({}, $.fn.fadeloader.defaults, options);

		//Public vars
		var html = $('html');
		html.data('main', this);
		html.data('statin', false);
		html.data('statout', false);
		html.data('alphain', ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);
		html.data('alphaout', '');
		html.data('mode', opts.mode);
		html.data('fadespeed', opts.fadeSpeed);
		html.data('easeload', opts.easeLoad);

		//Private vars
		var main = this;
		var loaderImg = '';
		var objArray = [];
		var childArr = [];

		//Generate loader HTML
		if(opts.preloadCustom === '') {
			loaderImg = '<div class="preloader" style="position:absolute;top:50%;left:50%;width:'+opts.preloadWidth+'px;height:'+opts.preloadHeight+'px; margin:-'+Math.round(opts.loadHeight/2)+'px 0 0 -'+Math.round(opts.preloadWidth/2)+'px;"><img src="'+opts.preloadImg+'" border="0" width="'+opts.preloadWidth+'" height="'+opts.preloadHeight+'" /></div>';
		}
		else { loaderImg = opts.preloadCustom; }

		//Prepend loader to BODY
		if(opts.preloader === true) { $('body').prepend(loaderImg); }

		function animIn(start_index, call) {
			if(html.data('statout') === false) {
				html.data('statin', true);
				var next_index = start_index+1;

				if(opts.mode == 'children') {
					object = $(childArr[start_index]);
				}
				else {
					object = main.find('.'+html.data('alphain')[start_index]);
				}

				if(object.length > 0) {
					object.css('opacity', '0');
					object.css('display', opts.displayType);
					object.animate({ opacity: 1 }, opts.fadeSpeed, opts.easeLoad, function() { animIn(next_index,call); });
					objArray.push(html.data('alphain')[start_index]);
				}
				else {
					html.data('alphaout', objArray.reverse());
					html.data('statin', false);
					eval(call);
					return false;
				}
			}
		}

		//First function call
		$(window).load(function() {
			$('.preloader').remove();

			if(opts.mode == 'children') {
				var subsubchildArr = html.data('main').children(':not(script,br)');
				childArr = $.makeArray(subsubchildArr);

				animIn(0 ,opts.onComplete);
			}
			else {
				animIn(0 ,opts.onComplete);
			}
		});

	};


	$.fn.fadeloader.animOut = function(url) {
		var html = $('html');
		var childArr = [];
		function fadeOutClasses(pos) {
			if(html.data('alphaout')[pos]) {
				var newpos = pos + 1;
				$('.'+html.data('alphaout')[pos]).animate({ opacity: 0 }, html.data('fadespeed'), html.data('easeload'), function() { $(this).css('display', 'none'); fadeOutClasses(newpos); });

			}
			else {
				html.data('statin', false);
				if(url) { document.location.href = url; }
				return false;
			}
		}

		function fadeOutChildren(pos, arr) {
			if(childArr[pos] && childArr[pos] != 'script' && childArr[pos] != 'br' && childArr[pos] != 'a') {
				var newpos = pos + 1;
				$(childArr[pos]).animate({ opacity: 0 }, html.data('fadespeed'), html.data('easeload'), function() { $(this).css('display', 'none'); fadeOutChildren(newpos, childArr); });
			}
			else {
				html.data('statin', false);
				if(url) { document.location.href = url; }
				return false;
			}
		}

		if(html.data('statin') === false) {
			html.data('statout', true);
			if(html.data('mode') == 'children') {
				var subsubchildArr = html.data('main').children(':not(script,br)');
				var subchildArr = $.makeArray(subsubchildArr);
				childArr = subchildArr.reverse();

				fadeOutChildren(0, childArr);
			}
			else {
				fadeOutClasses(0);
			}
		}
	};


	$.fn.fadeloader.defaults = {
		mode			: 'class', //or 'children'
		fadeSpeed		: 500,
		//fadeInOrder	: 'desc',
		//fadeOutOrder	: 'asc',
		easeLoad		: 'linear',
		displayType		: 'block',
		preloader		: true,
		preloadImg		: 'loading.gif',
		preloadWidth	: 50,
		preloadHeight	: 50,
		preloadCustom	: '', //element must have class 'preloader'
		onComplete		: ''
	};

})( jQuery );
