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
    
    // 3.ページ内リンクへのスクロールダウンの設定
    $('.main__scroll__to').on('click', function () {
    
        const target = $(this).attr('href');
        const targetPos = $(target).offset().top;
        
        $('html, body').animate({scrollTop: targetPos}, 400);
    
        return false;
        });


    // about message 可視表示設定    
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (window.matchMedia("(max-width: 768px)").matches) {
            const target = $('.top__mv__pic').offset().top;
            if (ST > target) {
                        $('.about__message-01').addClass('message-01');
                        $('.about__message-02').addClass('message-02');
                        $('.about__message-03').addClass('message-03');
                        $('.about__message-04').addClass('message-04');
                    }
                }

        if (window.matchMedia("(min-width: 768px)").matches) {
            const target = $('.top__mv__pic').offset().top;
            if (ST > target +200) {
                        $('.about__message-01').addClass('message-01');
                        $('.about__message-02').addClass('message-02');
                        $('.about__message-03').addClass('message-03');
                        $('.about__message-04').addClass('message-04');
                    }
                }

        if (window.matchMedia("(min-width: 1024px)").matches) {
            const target = $('.top__mv__pic').offset().top;
            if (ST > target + 400) {
                        $('.about__message-01').addClass('message-01');
                        $('.about__message-02').addClass('message-02');
                        $('.about__message-03').addClass('message-03');
                        $('.about__message-04').addClass('message-04');
                    }
                } 
    });

    // about image画像のアニメーション
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (window.matchMedia("(max-width: 1024px)").matches){

            $('.about__img').each(function () {
                const target = $('.about__txt__ja').offset().top;
                if (ST > target) {
                $('.about__img').addClass('image-move');
                }
            });
        }

        if (window.matchMedia("(min-width: 1024px)").matches){

            $('.about__img').each(function () {
                const target = $('.about__message').offset().top;
                if (ST > target -50) {
                $('.about__img').addClass('image-move');
                }
            });
        }

        // books image画像のアニメーション
        $('.books__img').each(function () {
            const target = $('.works__txt__set').offset().top;
            if (ST > target - 150) {
                $('.books__img').addClass('image-move');
            }
        });
    });


    //さまざまな可視表示設定
    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        // deco Canvas
        if (window.matchMedia("(max-width: 1024px)").matches){

            $('.deco__canvas').each(function () {
                const target = $('.about__pic').offset().top;
                if (ST > target - 100) {
                    $('.deco__canvas').addClass('canvas-move');
                }
            });
        }
        if (window.matchMedia("(min-width: 1024px)").matches){

            $('.deco__canvas').each(function () {
                const target = $('.kv--01').offset().top;
                if (ST > target + 150) {
                    $('.deco__canvas').addClass('canvas-move');
                }
            });
        }

        
        // works TTL
        if (window.matchMedia("(min-width: 1024px)").matches){
            $('.works__ttl').each(function () {
               const target = $('.deco__canvas').offset().top;
               if (ST > target + - 400) {
                   $('.works__ttl').addClass('works-move');
               }
           });
       }

       if (window.matchMedia("(max-width: 1024px)").matches){
           $('.works__ttl').each(function () {
               const target = $('.kv--01').offset().top;
               if (ST > target) {
                   $('.works__ttl').addClass('works-move');
               }
           });
       }

        // booksTTL
        if (window.matchMedia("(max-width: 768px)").matches){
            $('.books__ttl').each(function () {
                   const target = $('.books__top__circle').offset().top;
                   if (ST > target - 450) {
                       $('.books__ttl').addClass('books-move');
                   }
               });
        }

        if (window.matchMedia("(min-width: 768px)").matches){

            $('.books__ttl').each(function () {
                const target = $('.works__item__pic').offset().top;
                if (ST > target + 100) {
                    $('.books__ttl').addClass('books-move');
                }
            });
        }
        
        if (window.matchMedia("(min-width: 1024px)").matches){
            $('.books__ttl').each(function () {
                const target = $('.works__item__pic').offset().top;
                if (ST > target + 250) {
                    $('.books__ttl').addClass('books-move');
                }
            });
        }

       // skills tab-size
       if (window.matchMedia("(max-width: 500px)").matches){
        // ttl
        $('.skills__ttl').each(function () {
            const target = $('.kv__main--02').offset().top;
            if (ST > target - 300) {
                $('.skills__ttl').addClass('skills-move');
            }
        });
        // deveropment
        $('.deve__pic').each(function () {
            const target = $('.skills__ttl').offset().top;
            if (ST > target - 650) {
                $('.deve__pic').addClass('skills-move');
            }
        });
        // design
        $('.design__pic').each(function () {
            const target = $('.skills__sub__ttl').offset().top;
            if (ST > target - 300) {
                $('.design__pic').addClass('skills-move');
            }
        });
        // other
        $('.other__pic').each(function () {
            const target = $('.design__pic').offset().top;
            if (ST > target - 200) {
                $('.other__pic').addClass('skills-move');
            }
        });
    }

    if (window.matchMedia("(min-width: 500px)").matches){
        // ttl
        $('.skills__ttl').each(function () {
            const target = $('.kv--02').offset().top;
            if (ST > target - 150) {
                $('.skills__ttl').addClass('skills-move');
            }
        });
        // deveropment
        $('.deve__pic').each(function () {
            const target = $('.kv--02').offset().top;
            if (ST > target ) {
                $('.deve__pic').addClass('skills-move');
            }
        });
        // design
        $('.design__pic').each(function () {
            const target = $('.deve__pic').offset().top;
            if (ST > target - 100) {
                $('.design__pic').addClass('skills-move');
            }
        });
        // other
        $('.other__pic').each(function () {
            const target = $('.design__pic').offset().top;
            if (ST > target - 100) {
                $('.other__pic').addClass('skills-move');
            }
        });
    }

        // Thanks for viewing 
        if (window.matchMedia("(max-width: 1024px)").matches){
            $('.deco__thanks,.deco__viewing').each(function () {
                const target = $('.other__pic').offset().top;
                if (ST > target) {
                    $('.deco__thanks').addClass('thanks-move');
                    $('.deco__viewing').addClass('viewing-move');
                }
            });
        }
        if (window.matchMedia("(min-width: 1024px)").matches){
            $('.deco__thanks,.deco__viewing').each(function () {
                const target = $('.skills__txt').offset().top;
                if (ST > target) {
                    $('.deco__thanks').addClass('thanks-move');
                    $('.deco__viewing').addClass('viewing-move');
                }
            });
        }
    });

    // マウスストーカー
    $(function(){
        const mouse = $(".skills__mouse");
        if (window.matchMedia("(min-width: 1024px)").matches){

        $('.mouse_area').on('mousemove',function(e){
            const x=e.clientX;
            const y=e.clientY;
            mouse.css({
                "opacity": "1",
                "transform": "translate(" + x + "px," + y + "px)",
            });

            $(".mouse_area").on("mouseleave", function () {
                mouse.css({
                    "opacity": "0",
                });
            });
        });
      }
    });
   
});



