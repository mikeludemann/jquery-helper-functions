$(document).ready(function(){
	$('.headline').click(function(event) {
		event.preventDefault();

		$(this).toggleClass('open');

		$accordion_headline = $(this);
		$accordion_content = $(this).next('.content');

		$('.content').not($accordion_content).slideUp();
		$('.content').not($accordion_content).prev('.headline').removeClass('open');
		
		$accordion_content.stop(true, true).slideToggle(400);
	});
});
