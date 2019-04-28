$(document).ready(function(){

	$("#animateButton").click(function(){

		if($("#container").css('height') == "100px"){

			$("#container").animate({height: "300px", width: "500px", padding: "10px"});

		} else {

			$("#container").animate({height: "100px", width: "200px", padding: "2px"});

		}

	});

});
