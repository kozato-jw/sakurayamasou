
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる



// トップページ・スライダー
//-----------------------------------------
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


// ハンバーガーメニューとサイド固定メニューをクラス名で制御
//（MVを越えたら色変更や表示非表示など）
//-----------------------------------------
$(() => {
  const $hum = $(".hum"); // ハンバーガーボタン
  const $humMenu = $(".hum-menu"); // ハンバーガーメニュー
  const $reservation = $(".header__reservation"); // 予約ボタン
  const $mv = $(".mv"); // メインビジュアル
  const $targets = $(".header__reservation, .hum"); // スクロールで色変更する要素
  const $body = $("body"); // スクロール制御用

  /** ハンバーガーメニューの開閉処理 */
  function handleMenuToggle() {
    const isActive = $humMenu.hasClass("is-active");

    if (isActive) {
      // メニューを閉じる
      $humMenu.removeClass("is-active");
      $body.removeClass("no-scroll"); // スクロール許可
    } else {
      // メニューを開く
      $humMenu.addClass("is-active");
      $body.addClass("no-scroll"); // スクロール禁止
    }

    $hum.toggleClass("is-open");
    $reservation.toggleClass("is-hidden");
  }

  /** MV下端を超えたら色変更 */
  function checkMvPosition() {
    const mvBottom = $mv.offset().top + $mv.outerHeight();
    const headerReservationBottom = $reservation.offset().top + $reservation.outerHeight();

    if (headerReservationBottom > mvBottom) {
      $targets.addClass("is-active");
    } else {
      $targets.removeClass("is-active");
    }
  }

  // ハンバーガーメニューのクリックイベント
  $hum.on("click", (event) => {
    event.stopPropagation();
    handleMenuToggle();
  });

  // メニュー内のクリックで閉じないようにする
  $humMenu.on("click", (event) => event.stopPropagation());

  // ドキュメントのどこかをクリックするとメニューを閉じる
  $(document).on("click", () => {
    if ($humMenu.hasClass("is-active")) {
      handleMenuToggle();
    }
  });

  // スクロールでMVを超えたら色変更
  $(window).on("scroll", checkMvPosition);
  checkMvPosition(); // 初回実行
});









}); //冒頭の閉じ


