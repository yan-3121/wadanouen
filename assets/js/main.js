$(function(){

  $('#slideshow').vegas({
    delay: 7000,
    transition: 'fade',
    transitionDuration: 900,
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

        // ローダー終了
        function end_loader() {
          $('.loader').fadeOut(800);
        }
        // テキスト表示
        function show_txt() {
          $('.loader .loader__logo').fadeIn(400);
        }
        // テキスト非表示
        function hide_txt() {
          $('.loader .loader__logo').fadeOut(400);
        }

        // タイマー処理
        $(window).on('load', function () {
          // 処理①
          setTimeout(function () {
            show_txt();
          }, 500)
          // 処理②
          setTimeout(function () {
            hide_txt();
          }, 3500)
          // 処理③
          setTimeout(function () {
            end_loader();
          }, 4500)
        })

});

