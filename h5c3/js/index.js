$(function () {
    $('.container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass('now');
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $(".section").eq(index - 1).addClass("leaved");
            } else if (index == 3 && nextIndex == 4) {
                $(".section").eq(index - 1).addClass('leaved');
            }else if (index == 5 && nextIndex == 6) {
                $(".section").eq(index - 1).addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if (index == 6 && nextIndex == 7) {
                $('.screen07 .star img').each(function (i, item) {
                    $('.screen07 .star').addClass('show');
                    $(this).css('transition-delay',i*0.5+'s');
                });
            }
        },
        afterRender: function () {
            /*点击更多切换下一页*/
            $('more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show')
            });

            $('.screen08').on('mousemove',function (e) {
                /*鼠标移动事件*/
                $(this).find('.hand').css({
                    left:e.clientX -500,
                    top:e.clientY - 250
                });
            }).find('.again').on('click',function () {

                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },
        /*页面切换的时间 默认是700*/
        scrollingSpeed: 1000
    });
});