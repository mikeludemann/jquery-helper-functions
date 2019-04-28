$(document).ready(function(){
	$(".headline").click(function(){
		$(this).next().filter('.content').slideToggle("slow");
	});
});
