$(function(){

// 矢印がクリックされたら

$(".arrow").click(function(){
    // 画面のトップまでスクロールする
    $("html").animate({scrollTop:0} , 1000);

});


// 画面がスクロールされたら
$(window).scroll(function(){
       
    // 矢印の表示・非表示を指定
    let scrollTop = $(document).scrollTop();

    // 矢印の表示・非表示を指定
    if (scrollTop > 300){
        // 500pxを超えたらフェイドイン
        $(".arrow").fadeIn();
    } else {
        // それ以外はフェイドアウト
        $(".arrow").fadeOut();
        
    };

    });




    


    // 画像がクリックされたら、div#overをnavに追加
    // $("#picture").click(function(){
        // id="over"のdivタグを追加する
        // let div = $("#nav").append($(`<div id="over">`));
        // console.log(div);
        // ふわっと出るアニメ―ション
        // $('<div id="over">').appendTo($('.container')).hide().fadeIn();

        // id="over"のdivタグにspanとimgタグを追加
        // $("#over").append($(`<div class="img-box">`));
        // $(".img-box").append($(`<span class="close">&times;</span>`));
        // $(".img-box").append($(`<img class="lightbox">`));

        // クリックされた画像のsrcを取得する
        // let imageSrc = $(this).attr("src");
        // .lightboxにとってきたソースを追加するだけ！ｃｓｓの反映ではない
        // $(".lightbox").attr("src",imageSrc);


        // .closeがおされたら
        // $(".close").click(function(){
            // $(this).parent().parent().remove();
            // $('#over').remove();
        // })

    // });




});