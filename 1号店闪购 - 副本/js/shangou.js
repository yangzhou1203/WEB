$("#fuwu").mouseenter(function () {
    $("#fuwu>ul").stop().slideDown();
    $("#fuwu>a>i").css("transform", "rotate(180deg)");
    $("#fuwu>a>i").css("transition", "1s");
    $("#fuwu").css("borderTop", "1px solid #fff");
    // $("#fuwu").css("z-index", 5);
    $("#fuwu>ul").css("background", "#f4f4f4");
});
$("#fuwu").mouseleave(function () {
    $("#fuwu>ul").stop().slideUp();
    $("#fuwu>a>i").css("transform", "rotate(0deg)");
    $("#fuwu>a>i").css("transition", "0.7s");
});
// 选项卡====================================================================
// $("#l-left").mouseover(function () {
//     $("#lun1").css("z-index", 1);
//     $("#lun2").css("z-index", 0);
// })
// $("#l-right").mouseover(function () {
//     $("#lun1").css("z-index", 0);
//     $("#lun2").css("z-index", 1);
// })
$(function () {
    var timer = null;
    var j = 0;
    $("#lunbo-b li").mouseenter(function () {
        j = $(this).index()
        $(this).addClass("bgc").siblings().removeClass("bgc");
        $("#luobo ul li").eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    });
    autoPlayq();
    function autoPlayq() {
        timer = setInterval(function () {
            j++;
            if (j > $("#lunbo-b li").length - 1) {
                j = 0;
            }
            $("#lunbo-b li").eq(j).addClass("bgc").siblings().removeClass("bgc");
            $("#luobo ul li").eq(j).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        }, 2000);
    }
    $("#lunboz").mouseover(function () {
        clearInterval(timer);
        timer = null;
    });
    $("#lunboz").mouseout(function () {
        autoPlayq()
    });
})



// 轮播图================================================================
$(function () {
    var timer1 = null;
    var k = 0;
    $("#dh-li>li").mouseenter(function () {
        k = $(this).index()
        $(this).addClass("active").siblings().removeClass("active");
        $(".lunbo-kk-tt>div").eq($(this).index()).stop().fadeIn(700).siblings().stop().fadeOut(700);
    });
    autoPlay();
    function autoPlay() {
        timer1 = setInterval(function () {
            k++;
            if (k > $("#dh-li>li").length - 1) {
                k = 0;
            }
            $("#dh-li>li").eq(k).addClass("active").siblings().removeClass("active");
            $(".lunbo-kk-tt>div").eq(k).stop().fadeIn(700).siblings().stop().fadeOut(700);
        }, 2000);
    }


    $("#lunbo-kk").mouseover(function () {
        clearInterval(timer1);
        timer1 = null;
    });
    $("#lunbo-kk").mouseout(function () {
        autoPlay()
    });
})


// 轮播图上  移上变色===========================================
$(".hb_link>div").mouseenter(function () {

    $(this).stop().fadeTo(700, 0.8).siblings().stop().fadeTo(700, 1);

});

$(".hb_link>div").mouseleave(function () {
    $(this).stop().fadeTo(700, 0);
});


// 固定导航栏判断=============================================


window.onscroll = function () {
    // console.log(123)
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT)
    if (scrollT > 37) {
        $("#nav")[0].style.position = "fixed";
        $("#nav")[0].style.top = 0;
        // console.log($("#nav"));
    } else if (scrollT <= 37) {
        $("#nav")[0].style.position = "relative";

        // console.log($("#nav"));
    }
}
// 楼层效果=========================================================
$(function () {


    $(".nav-c ul li").not(":last").click(function () {
        //获取索引
        var _index = $(this).index();
        $(".nav-c ul li").not(":last").find("span").removeClass("ac");
        $(this).find("span").addClass("ac")
        var top = $("#banner>div").eq(_index).offset().top - 180;; //+ $("#banner>div").eq(_index).outerHeight();
        console.log(top);
        $("body,html").animate({
            scrollTop: top
        }, 1000)
    });
    $(window).scroll(function () {
        //获取滚动的距离
        var _top = $(window).scrollTop();
        //显示和隐藏楼层
        if (_top >= 600) {
            $(".nav-c").fadeIn();
        } else {
            $(".nav-c").fadeOut();
        }
    });
})

//返回顶部
$(".nav-c ul li.last").click(function () {
    $('body,html').animate({
        scrollTop: 0 
    }, 2000);
})





// 选择地址小三角旋转====================================================

var onOff = true;
$("#sh-a").click(function () {
    $("#city").stop().fadeToggle(300);
    if (onOff) {
        $("#sh-a em").css("transform", "rotate(180deg)");
        $("#sh-a em").css("transition", "1s");
        $("#sh-a").css("borderBottom","1px solid #f4f4f4")
        $("#city").css("borderTop","1px solid #f4f4f4")
    } else {
        $("#sh-a em").css("transform", "rotate(0deg)");
        $("#sh-a em").css("transition", "1s");
        $("#sh-a").css("borderBottom","1px solid #dbdbdb")
    }
    onOff = !onOff;
 $("#city").animate({
            scrollTop: 0
        }, 0)
})



// 地址选择 楼层=======================
$(function () {
    $(".zimu-t a").not(":last").click(function () {
        //获取索引
        var _index = $(this).index();
        $(".zimu-t a").not(":last").find("a").removeClass("lcactive");
        $(this).find("a").addClass("lcactive")
         var top = $(".zmxh").eq(_index).offset().top-50;//+ $(".zmxh").eq(_index).outerHeight()/2-100;
        $("#city").animate({
            scrollTop: top
        }, 800)
    });
    // 返回顶部
    $(".zimu-t a.last").click(function () {
        $('#city').animate({
            scrollTop: 0 
        }, 1000);
    })
});

// 判断字母筛选固定==========================

$("#fan").click(function () {
    $('#city').animate({
        scrollTop: 0 
    }, 1000);
})