
jQuery(function ($) {

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



// ハンバーガーメニューとサイド固定メニューの動き
//（MVを越えたら色変更や表示非表示など）
//-----------------------------------------
$(() => {
  const $hum = $(".hum"); // ハンバーガーボタン
  const $humMenu = $(".hum-menu"); // ハンバーガーメニュー
  const $reservation = $(".header__reservation"); // 予約ボタン
  const $mv = $(".mv, .mv-sub"); // メインビジュアル（下層ページも対応）
  const $targets = $(".header__reservation, .hum"); // スクロールで色変更する要素
  const $body = $("body"); // スクロール制御用

  /** ハンバーガーメニューの開閉処理 */
  function handleMenuToggle() {
    const isActive = $humMenu.hasClass("is-active");

    if (isActive) {
      // メニューを閉じる（スライドアウト & フェードアウト）
      $humMenu.css({ right: "-100%", opacity: 0 });

      // アニメーション後にクラスを削除
      setTimeout(() => {
        $humMenu.removeClass("is-active");
        $body.removeClass("no-scroll"); // スクロール許可
      }, 500); // CSSのtransition時間と合わせる
    } else {
      // メニューを開く
      $humMenu.addClass("is-active").css({ right: "0", opacity: 1 });
      $body.addClass("no-scroll"); // スクロール禁止
    }

    $hum.toggleClass("is-open");
    $reservation.toggleClass("is-hidden");
  }

  /** MV下端を超えたら色変更 */
  function checkMvPosition() {
    if ($mv.length === 0) return; // .mv, .mv-sub がない場合は処理しない

    const mvBottom = $mv.offset().top + $mv.outerHeight();
    const headerReservationBottom = $reservation.offset().top + $reservation.outerHeight();

    if (headerReservationBottom > mvBottom) {
      $targets.addClass("is-active");
    } else {
      $targets.removeClass("is-active");
    }
  }

  // ハンバーガーメニューのクリックイベント（開閉）
  $hum.on("click", (event) => {
    event.stopPropagation();
    handleMenuToggle();
  });

  // **メニューのどこかをクリックしたら閉じる**
  $humMenu.on("click", (event) => {
    const isLink = $(event.target).is("a"); // クリックされた要素がリンクか
    const isCloseButton = $(event.target).closest(".hum-menu__close").length > 0; // 閉じるボタンか

    if (isLink || isCloseButton || $(event.target).is(".hum-menu")) {
      handleMenuToggle();
    }
  });

  // **ドキュメントのどこかをクリックしたら閉じる**
  $(document).on("click", (event) => {
    if (!$(event.target).closest(".hum-menu, .hum").length && $humMenu.hasClass("is-active")) {
      handleMenuToggle();
    }
  });

  // スクロールでMVを超えたら色変更
  $(window).on("scroll", checkMvPosition);
  checkMvPosition();
});



}); //冒頭の閉じ


