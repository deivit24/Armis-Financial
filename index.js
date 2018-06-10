var mainNav = document.querySelector("#mainNav");
window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {

        $('.nav').fadeIn('slow');
        $('.nav').css('top', window.pageYOffset);
    } else {
        $('.nav').fadeOut('fast');

    }
}, false);



window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 190) {
        $('.navs').fadeOut('fast');

    } else {
        $('.navs').fadeIn();
        $('.navs').css('top', window.pageYOffset);
    }
}, false);




$(function () {
  $('[data-toggle="popover"]').popover();
});

$('#element').popover('toggle');
