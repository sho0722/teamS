$(function() {

    let ToplinksA = $(".topLinks").children("a");
    console.log(ToplinksA)
    $(ToplinksA).mouseover(function() {
        console.log("#")
        $(this).children("i").addClass("waving");
    });

    $(ToplinksA).mouseout(function() {
        $(this).children("i").removeClass("waving");
    })

    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 40) {
            $(".date").fadeIn("slow");
        }

        if (scrollTop > 100) {
            $(".time").fadeIn("slow");
        }

        if (scrollTop > 200) {
            $(".people").fadeIn("slow");
        }

        if (scrollTop > 400) {
            $(".car").fadeIn("slow");
        }

        if (scrollTop > 600) {
            $(".like").fadeIn("slow");
        }

        if (scrollTop > 800) {
            $(".purpose").fadeIn("slow");
        }

        let driverATop = $(".driverA").offset().top;
        if (scrollTop > driverATop - 400) {
            $(".driverA").animate({right: 0}, 1000);
        }

        let driverBTop = $(".driverB").offset().top;
        if (scrollTop > driverBTop - 400) {
            $(".driverB").animate({right: 0}, 1000);
        }

        let driverCTop = $(".driverC").offset().top;
        if (scrollTop > driverCTop - 400) {
            $(".driverC").animate({right: 0}, 1000);
        }

        let driverDTop = $(".driverD").offset().top;
        if (scrollTop > driverDTop - 400) {
            $(".driverD").animate({right: 0}, 1000);
        }

        let driverETop = $(".driverE").offset().top;
        if (scrollTop > driverETop - 400) {
            $(".driverE").animate({right: 0}, 1000);
        }
    })
    
})