$(function(){
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
    
    $('.slick')
    .on('init', function () {
        $('.slick-slide[data-slick-index="0"]').addClass('add-animation');
    })

    $('.slick01').slick({
        autoplay: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: false,
        arrows: false,
    }
    )  

    .on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
          $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
          $(".remove-animation", this).removeClass(
            "remove-animation add-animation"
          );
        },
      });
});
