$(function() {
    // どこからがクリックフォーカスされたら
    $(".where").focus(function() {
        let s = $(this).next().slideDown();

        console.log('where'); 
        
    });

    //  
    $(".dbox li").click(function() {
        // テキスト取ってきて
        let text = $(this).text();
        console.log(text);
        // 入力欄に選択されたテキスト追加
        $(".where").val(text);
        // .dbox liのulをスライドアップ
        $(this).parent().slideUp();

       
    })

    // どこまでがクリックされたら
    $(".Where-until").focus(function() {
       let n =  $(this).next().slideDown();
       console.log('Where-until'); 
    })

    $(".wbox li").click(function() {
        let text = $(this).text();
        console.log(text);
        $(".Where-until").val(text);
        $(this).parent().slideUp(); 
    })

    $('.submit').jrumble({
        x: 3,
        y: 3,
        rotation: 1
    });

    //登録ボタンをプラグインでブルブル 
    $(".submit").hover(function() {
        $(this).trigger('startRumble');
    }, function(){
        $(this).trigger('stopRumble');
        
    })

    $('h2').jrumble({
        x: 4,
        y: 0,
        rotation: 0
    });

    $("h2").hover(function() {
        $(this).trigger('startRumble');
    }, function(){
        $(this).trigger('stopRumble');
        
    })
    
})
