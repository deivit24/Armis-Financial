
window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 300) {
        $('.nav').fadeIn('slow');
        $('.nav').css('top', window.pageYOffset);
    } else {
        $('.nav').fadeOut();
    }
}, false);



window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 300) {
        $('.navs').fadeIn('slow');
        $('.navs').css('top', window.pageYOffset);
    } else {
        $('.navs').fadeOut();
    }
}, false);
