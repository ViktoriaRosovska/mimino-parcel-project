new Swiper('.hotel-hero__slider', {
    loop: true,
    spaceBetween: 20,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    slidesPerView: 1.5,
    breakpoints: {
        375: {
           slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 1.5,
        },
        1440: {
            slidesPerView: 1.5,
        },
   },
    
    // autoplay: {
    //     delay: 2500,
    //     stopOnLastSlide: false,
    //     disabledOnIteration: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },
    // speed: 600,
     
  
});