
window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
        $('.nav').fadeIn('slow');
        $('.nav').css('top', window.pageYOffset);
    } else {
        $('.nav').fadeOut();
    }
}, false);



window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
        $('.navs').fadeIn('slow');
        $('.navs').css('top', window.pageYOffset);
    } else {
        $('.navs').fadeOut();
    }
}, false);

$(function () {
  $('[data-toggle="popover"]').popover();
});

$('#element').popover('toggle');
