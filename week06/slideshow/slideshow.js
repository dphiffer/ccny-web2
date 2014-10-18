(function($) {
	$(document).ready(function() {
		var pos = 0;
		$('#slideshow figure').click(function(e) {
			pos++;
			if (pos == $('#slideshow figure').length) {
				pos = 0;
			}
			$('#slider').css('left', -800 * pos);
		});
	});
})(jQuery);
