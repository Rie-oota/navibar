$(function(){
  // 変数navを作成する
	nav = $('.navibar');
  // ナビバーの位置情報を代入する
	navOffset = nav.offset();
  // スクロールした際の処理を指定する
	$(window).scroll(function () {
    // ナビバー上部がページトップに来た場合
		 if($(window).scrollTop() > navOffset.top) {
    // ナビバーにクラスを追加する
		nav.addClass('fixed'); 
    // それ以外の場合はクラスを外す
		}else {
		nav.removeClass('fixed');
		}
	}); 
});