$(function () {
    // 【共通の設定】
    // 1.スクロールでヘッダーのnav/logoが消える
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

    // ページ内リンクへのスクロールダウンの設定
    $('.item__scroll__to').on('click', function(){
    
        // クリックした要素（今回はa要素）のhref属性の値を調べる
        const target = $(this).attr('href');
    
        // 変数名targetの座標を調べる
        const targetPos = $(target).offset().top;
        
        if (window.matchMedia("(min-width: 1024px)").matches){
        // targetPosまでの移動をアニメーションさせる
        $('html, body').animate({scrollTop: targetPos + 180}, 400);
        } else {
            $('html, body').animate({scrollTop: targetPos + 30}, 400);
        }
    
        // a要素のリンク機能を実行させない
        return false;
    
     });
    
});


