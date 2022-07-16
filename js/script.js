
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500, 'swing');
    return false;
  });

  //ドロワーメニュー
	$('#js-drawer').on('click', function (e) {
		e.preventDefault();
		$('.drawer__icon').toggleClass('is-active');
		$('.drawer-content').fadeToggle();
		return false;
	});


	// ドロワークリックするときえる
	var clickItem = $(".drawer-content .drawer-content__items .drawer-content__item a ");
	clickItem.on("click", function () {
		$('.drawer__icon').toggleClass('is-active');
		$('.drawer-content').fadeToggle();
		return false;
	});

	// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
	$('a[href^="#"]').click(function () {
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		var speed = 500;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});
