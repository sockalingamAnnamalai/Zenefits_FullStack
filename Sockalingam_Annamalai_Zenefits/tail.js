$(document).bind('mousemove', function(e) {

    $('#tail').animate({
        left: e.pageX - 5,
        top: e.pageY - 7
    }, 15.8);
});