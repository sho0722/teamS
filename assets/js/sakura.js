$(function() {
    // どこまでがクリックされたら
    $(".where").click(function() {
        let s = $(this).siblings().slideDown();
        console.log(s); 
        
    });
    // $("html").click(function() {
    //     $("label ul").slideUp();
    // })

    $(".Where-until").click(function() {
       let n =  $(this).siblings().slideDown();
       console.log(n); 
    })

})