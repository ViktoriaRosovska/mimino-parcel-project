new Swiper(".hotel-hero__slider", {
    spaceBetween: 20,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    allowSlidePrev: true,
    allowSlideNext: true,
    resizeObserver: false,
    loop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disabledOnIteration: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
    speed: 600,
    // effect: 'fade',
    
//    direction: 'vertical',
});