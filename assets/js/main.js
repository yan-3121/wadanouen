$(function(){

  $('#slideshow').vegas({
    delay: 7000,
    transition: 'fade',
    transitionDuration: 3000,
    animation: 'kenburns',
    animationDuration: 10000,
    slides: [
      { src: './assets/images/mainvisual@2x.jpg'},
      { src: './assets/images/mainvisual2.jpg'},
      { src: './assets/images/mainvisual3.jpg'},
    ],
    
  });

    const ham = $('#js-hamburger');
    const nav = $('#js-nav');
    const future = $('#futureLink');
    const contact = $('#contactLink');
    const body = $('body');
    
    ham.on('click' , function () {
        ham.toggleClass('active');
        nav.toggleClass('active');
        body.toggleClass('active');
    });
    
    future.on('click' , function() {
        ham.removeClass('active');
        nav.removeClass('active');
        body.removeClass('active');
    });
    
    contact.on('click' , function() {
        ham.removeClass('active');
        nav.removeClass('active');
        body.removeClass('active');
    });

      $(function () {
        $('.button').prevAll().hide();
        $('.button').click(function () {
            if ($(this).prevAll().is(':hidden')) {
                $(this).prevAll().slideDown();
                $(this).text('close').addClass('close');
            } else {
                $(this).prevAll().slideUp();
                $(this).text('資料▼').removeClass('close');
              }
          });
      });

      $(function () {
        $(window).scroll(function () {
          const windowHeight = $(window).height();
          const scroll = $(window).scrollTop();
      
          $('.fadein').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
              $(this).addClass("is-fadein");
            }
          });
        });
      });
});

