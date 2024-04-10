$(function () {

    // 【共通の設定】
    // スクロールでヘッダーのnav/logoが消える
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (ST >= 127) {
            $('.header__nav').addClass('noneNav');
            $('.header__left__box').addClass('noneLogo');
        } else {
            $('.header__nav').removeClass('noneNav');
            $('.header__left__box').removeClass('noneLogo');
        }
    });

    // 2.バーガーメニューをクリックすると、、、
    // ①メニュー開閉  
    $('#header__menu__box, .header__name').on('click', function () {
        $('#header__menu__top').toggleClass('rotatoTop');
        $('#header__menu__bottom').toggleClass('rotateBottom');

        $('#menu').toggleClass('translateNav');
        $('.header__ul').toggleClass('headerNav');
        // ②名前・ロゴの表示非表示
        $('.header__left__box').toggleClass('showLogo')
        $('.header__name').toggleClass('headerName');
        // ③バーガーメニュー内のアニメーション用
        $('.menu__nav, .menu__nav__box').toggleClass('menuMove');
        // ④バーガメニュー内の写真用
        $('.menu__img').toggleClass('imgMove');
        // ⑤ハンバーガーメニューを開いた時は、bodyのスクロールを非表示にする -->
        if($('body').hasClass('scrollOff')){
            $('body').removeClass('scrollOff');
            } else {
            $('body').addClass('scrollOff');
            }
    });
    
    // 3.ページ内リンクへのスクロールダウンの設定
    $('.works__scroll__to').on('click', function(){
    
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        
        $('html, body').animate({scrollTop: targetPos}, 400);

        return false;
    });


    // banner ttl 可視表示
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (window.matchMedia("(max-width: 768px)").matches) {
        
           const target = $('.banner__ttl').offset().top;
           if (ST > target -900) {
           $('.banner__ttl').addClass('bannerTtl');
         
          }
        };

        if (window.matchMedia("(min-width: 768px)").matches) {
        
           const target = $('.banner__ttl').offset().top;
           if (ST > target -1000) {
           $('.banner__ttl').addClass('bannerTtl');
         
          }
        };

        if (window.matchMedia("(min-width: 1500px)").matches) {
        
           const target = $('.banner__ttl').offset().top;
           if (ST > target -1300) {
           $('.banner__ttl').addClass('bannerTtl');
         
          }
        };
       
    });

});


