$(document).ready(function() {

	// Sticky Navigation
	$("#nav").sticky({topSpacing:0});


	$(".upcoming-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#upcoming").offset().top
	    }, 500);
	});
	$(".about-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, 500);
	});
	$(".past-speakers-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#past-speakers").offset().top
	    }, 500);
	});

	$(".top-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("body").offset().top
	    }, 500);
	});


	// Fittext headline
	jQuery("h1.title").fitText(1.2, { minFontSize: '40px', maxFontSize: '105px' });


});