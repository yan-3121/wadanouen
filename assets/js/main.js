const ham = $('#js-hamburger');
const nav = $('#js-nav');
const future = $('#futureLink');
const contact = $('#contactLink');
const body = $('body');

ham.on('click' , function () {
    ham.toggleClass('active');
    nav.toggleClass('active');
});

future.on('click' , function() {
    ham.removeClass('active');
    nav.removeClass('active');
});

contact.on('click' , function() {
    ham.removeClass('active');
    nav.removeClass('active');
});

body.on('click' , function() {
    body.toggleClass('active')
});

$('.slick01').slick({
    autoplay: true,
    dots: false,
    arrows: false,
}
);