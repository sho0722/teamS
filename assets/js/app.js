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
        }

        if ( scrollTop > 50 ){
            $(".takeme").fadeIn();
        } else {
            $(".takeme").fadeOut();
        }
    });
    
});