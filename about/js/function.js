$(function () {
    //---ここにjQueryを記述---

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
    $('.about__scroll__to').on('click', function(){
    
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        
        $('html, body').animate({scrollTop: targetPos}, 400);

        return false;
        });


    // biography strength の可視表示
        const windowHeight = $(window).height();
        $(window).on('scroll', function (){
        const ST =$(window).scrollTop();

    
            // biography可視表示
            if (window.matchMedia("(max-width: 768px)").matches) {
                $('.biography__ttl__set , .biography__swiper').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -800) {
                 $(this).addClass('bioMove' + $(this).index($));
                }
                }
            )};

            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.biography__ttl__set , .biography__swiper').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -700) {
                 $(this).addClass('bioMove' + $(this).index($));
                }
                }
            )};

            if (window.matchMedia("(min-width: 1024px)").matches) {
                $('.biography__ttl__set , .biography__swiper').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -1000) {
                 $(this).addClass('bioMove' + $(this).index($));
                }
                }
            )};

            if (window.matchMedia("(min-width: 1500px)").matches) {
                $('.biography__ttl__set , .biography__swiper').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -700) {
                 $(this).addClass('bioMove' + $(this).index($));
                }
                }
            )};

            // strength可視表示
            if (window.matchMedia("(max-width: 768px)").matches) {
                $('.strength__ttl__set , .strength__container-01 , .strength__container-02 , .strength__container-03').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -800) {
                 $(this).addClass('stMove' + $(this).index($));
                 console.log(this);
                }
                }
                
            )};

            if (window.matchMedia("(min-width: 768px)").matches) {
                $('.strength__ttl__set , .strength__container-01 , .strength__container-02 , .strength__container-03').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -700) {
                 $(this).addClass('stMove' + $(this).index($));
                }
                }
            )};

            if (window.matchMedia("(min-width: 1024px)").matches) {
                $('.strength__ttl__set , .strength__container-01 , .strength__container-02 , .strength__container-03').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -800) {
                 $(this).addClass('stMove' + $(this).index($));
                }
                }
            )};

            if (window.matchMedia("(min-width: 1500px)").matches) {
                $('.strength__ttl__set , .strength__container-01 , .strength__container-02 , .strength__container-03').each(function (){
                    
                 const target = $(this).offset().top;
                 if (ST > target -1000) {
                 $(this).addClass('stMove' + $(this).index($));
                }
                }
            )};

             
        });
   
});


