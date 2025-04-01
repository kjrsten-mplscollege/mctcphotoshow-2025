// SMOOTH SCROLLING

$(document).ready(function () {
    $('.scroll-down').on('click', function(e) {
        // e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
    });





    //REMOVES EXTRA SPACE ON MOBILE
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth < 576) {
            $(".featurette").removeClass("my-5");
        }if (viewportWidth > 576) {
            $(".featurette").addClass("my-5");
        }
    });

});




