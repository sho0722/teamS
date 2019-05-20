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

})