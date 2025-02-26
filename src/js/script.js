
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる




  new Swiper(".top-slider__swiper", {
    loop: true, // 無限ループ
    slidesPerView: 2.19, // スライドを自動幅に設定（CSSで制御）
    centeredSlides: true, // 中央のスライドを中央寄せ
    spaceBetween: 15, // スライド間の余白
    autoplay: {
      delay: 4000, // 4秒ごとにスライド（ゆったりめ）
      disableOnInteraction: false, // ユーザー操作後も自動スライドを継続
    },
    speed: 2000, // スライドのアニメーション速度を1秒に設定
    grabCursor: true, // マウスカーソルを「掴む」スタイルに変更
  });




});
