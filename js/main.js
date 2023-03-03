$(document).ready(function(){
    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 20) {
            $('#header').css({
                'margin-top': '-2px',
                'background': 'white',
                'box-shadow': '0 .2rem .3rem gray'
            });
        } else {
            $('#header').css({
                'margin-top': '40px',
                'background': 'none',
                'box-shadow': 'none'
            });
        }
    });
});