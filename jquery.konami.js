/**
 * Konami Code jQuery plugin
 * =========================
 * A jQuery Plugin for easily integrating an easter egg in your project
 * to be triggered via the [Konami code].
 *
 *
 * - Copyright 2011 8BIT, http://8bit.io
 * - Copyright 2011 Marek `saji` Augustynowicz, http://github.com/marek-saji
 * - Rewritten by Philip Howard, http://github.com/gadgetoid
 *
 * Released under the [MIT License].
 *
 *
 * Typical usage
 * -------------
 *
 *     $.konami(function() {
 *     	// do something amazing
 *     });
 *
 * Custom code
 * ----------
 *
 *  	$.komani({
 *			cheat: function() {
 *				// do something amazing
 *			},
 *			code: [38,38]
 *  	})
 *
 * [Konami code]: http://en.wikipedia.org/wiki/Konami_Code
 * [MIT License]: http://www.opensource.org/licenses/mit-license.php
 */
(function( $ ){
	"use strict";
	$.fn.konami = function( o ) {
		var r = typeof(o) == 'function' ? o : o.cheat,
			c = o.code || [38,38,40,40,37,39,37,39,66,65],
			e = [];
		$(window).keyup(function(evt){
			if(e.length>=c.length) e.shift();
			e.push(evt.keyCode || evt.which);
			if(e.join()==c.join()) r();
		});
	};
}(jQuery));
