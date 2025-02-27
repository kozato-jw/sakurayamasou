
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる



// トップページ・スライダー
  new Swiper(".top-slider__swiper", {
    loop: true,
    slidesPerView: 1.156,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 3000,
    grabCursor: true, 
    breakpoints: {
        767: {
          slidesPerView: 2.113,
          spaceBetween: 15,
        },
  }
  });


// SP版予約ボタンの動き
  const reservationBtn = document.querySelector(".header__reservation");
  const mv = document.querySelector(".mv");


  if (!reservationBtn || !mv) return;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const mvRect = mv.getBoundingClientRect();


    if (mvRect.bottom > 0) {
      reservationBtn.classList.remove("is-visible");
      return; 
    }

    if (mvRect.bottom <= 0) {
      reservationBtn.classList.add("is-visible");
    }

  });









}); //冒頭の閉じ


