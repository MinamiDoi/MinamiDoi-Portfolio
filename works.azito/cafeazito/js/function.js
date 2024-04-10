$(function() {

// ヘッダー　ナブのサイズ変更
const windowHeight = $(window).height()

$(window).on('scroll', function(){

const ST = $(window).scrollTop();
const target = $('.greeting').offset().top;

if (ST > target - 70) {
 $('.gnav__link').addClass('gnavChange');
    } else {
        $('.gnav__link').removeClass('gnavChange');
        }
});

// スムーススクロール
$('.click__to').on('click', function(){
const target = $(this).attr('href');
const targetPos = $(target).offset().top;

$('html, body').animate({scrollTop: targetPos}, 500);

return false;
});

});
