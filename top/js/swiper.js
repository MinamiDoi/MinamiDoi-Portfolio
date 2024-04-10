
// WORKSのswiperの設定
const swiperWork = new Swiper('.works__contents__swiper', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: "auto",
    spaceBetween: "7%",
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 200,
    speed: 1000,
    mousewheel: {releaseOnEdges:true},
});

// SKILLSのswiperの設定
const swiperSkills = new Swiper('.skills-swiper', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: "auto",
    spaceBetween: "7%",
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    speed: 1200,
    mousewheel: {releaseOnEdges:true},
});