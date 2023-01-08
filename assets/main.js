const ham = $('#js-hamburger');
const nav = $('#js-nav');
const future = $('#futureLink');
const contact = $('#contactLink')

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