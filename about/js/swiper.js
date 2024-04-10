
const swiperAbout = new Swiper('.biography__swiper', {
    direction: 'horizontal', 
    loop: false,
    effect: 'slide', 
    slidesPerView: "auto",
    spaceBetween: "60",
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 900,
    speed: 800,
    mousewheel: {releaseOnEdges:true},
});