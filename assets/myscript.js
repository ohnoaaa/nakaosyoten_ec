// inview.js
// https://github.com/protonet/jquery.inview /で対応
$('.cta').on('inview', function (event, isInView) {
  // .sxrollが表示されたら
  // $('#sp_btn').addClass('close'); //処理を記述
  // if (isInView) {
  //   $('#sp_btn').addClass('close');
  //   $('.contact_header').addClass('close');
  // } else {
  //   $('#sp_btn').removeClass('close');
  //   $('.contact_header').removeClass('close');
  // }
});

//一文字ずつでてくる
$('.updown').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('active'); //処理を記述
});

$('.fadeInText').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('upText'); //処理を記述
});
$('.fadeInText-Y').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('upText-Y'); //処理を記述
});

$('.fadeUpTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeUp');
  //処理を記述
});
$('.fadeLeftTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeLeft');
  //処理を記述
});
$('.fadeRightTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeRight');
  //処理を記述
});
$('.fadeInTrigger').on('inview', function () {
  // .sxrollが表示されたら
  $(this).addClass('fadeIn');
  //処理を記述
});

//ハンバーガー
$('.openbtn1').click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
  $('#g-nav').toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$('#g-nav a').click(function () {
  //ナビゲーションのリンクがクリックされたら
  $('.openbtn1').removeClass('active'); //ボタンの activeクラスを除去し
  $('#g-nav').removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});

// ドロップダウンの設定を関数でまとめる
function mediaQueriesWin() {
  var width = $(window).width();
  if (width <= 768) {
    // 横幅が768px以下の場合
    $('.has_child').off('click'); // has_childクラスがついたdivのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $('.nav_child').show(); // nav_childを常に表示
    $('.has_child').on('click', function (e) {
      // has_childクラスがついたdivをクリックしたら
      e.preventDefault(); // デフォルトのリンク動作を無効化
      var parentElem = $(this); // クリックされた親要素のdivを取得
      parentElem.toggleClass('active'); // クラスを切り替える
      parentElem.children('.nav_child').stop().slideToggle(500); // スライドトグルで開閉
      return false; // リンクの無効化
    });
    // .nav_childのリンクにクリックイベントを伝播させない
    $('.nav_child a').on('click', function (e) {
      e.stopPropagation(); // クリックイベントの伝播を停止
    });
  } else {
    // 横幅が768px以上の場合
    $('.has_child').off('click'); // has_childクラスがついたdivのonイベントをoff(無効)にし
    $('.has_child').removeClass('active'); // activeクラスを削除
    // $('.has_child').children('.nav_child').css("display", ""); // スライドトグルで動作したdisplayも無効化にする
    // $(".nav_child").hide(); // nav_childを非表示
  }
}

// ウィンドウリサイズ時に実行
$(window).resize(function () {
  mediaQueriesWin();
});

// ページ読み込み時に実行
$(document).ready(function () {
  mediaQueriesWin();
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next('.box'); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass('close')) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass('close'); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass('close'); //クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function () {
  // $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $('.open').each(function (index, element) {
    //openクラスを取得
    var Title = $(element).children('.title'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close'); //タイトルにクラス名closeを付与し
    var Box = $(element).children('.box'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500); //アコーディオンを開く
  });
});

//チェックボックスをチェックすると、「入力内容を確認する」ボタンがactiveになる
$(function () {
  $('#submit').prop('disabled', true);

  $('#agree').on('click', function () {
    if ($(this).prop('checked') == false) {
      $('#submit').prop('disabled', true);
    } else {
      $('#submit').prop('disabled', false);
    }
  });
});
