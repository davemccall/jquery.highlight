/*
* highlight
*
* Blinks element's background color twice.
* Modeled after scriptaculous highlight method.
*
* http://www.dave-mccall.com/
*
* Usage: $("#theElement").highlight({ color: "#ff9", speed: 300 });
*
* Requires: jquery.color.js
*
* Released under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
    $.fn.highlight = function (options) {
		$(this).each(function () {
			var $this = $(this);
			var opts = $.extend( {}, $.fn.highlight.defaults, options);
			var originalBackground = $this.css("background-color");
			if (originalBackground == "rgba(0, 0, 0, 0)") originalBackground = "transparent";
			$this
				.animate({ "background-color": opts.color }, opts.speed)
				.animate({ "background-color": originalBackground }, opts.speed)
				.animate({ "background-color": opts.color }, opts.speed)
				.animate({ "background-color": originalBackground }, opts.speed);
		});
        return $(this);
    }
	$.fn.highlight.defaults = {
		color: "#ff9",
		speed: 300
	};
})(jQuery);