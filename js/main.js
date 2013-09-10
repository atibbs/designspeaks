
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
