(function($) {
	$(document).ready(function() {
		$('#slideshow figure').click(function(e) {
			console.log(this);
			$(this).addClass('done');
			if ($('#slideshow .done').length == 5) {
				$('#slideshow figure').each(function(i, figure) {
					if (i < 4) {
						$(figure).removeClass('done');
					}
				});
			}
			//$(e.target).addClass('current');
		});
	});
})(jQuery);
