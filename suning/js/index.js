$(function () {
    var $snBanner = $('.sn_banner');
    var snbW = $snBanner.width();
    // var snbW = 750;
    // 两个ul选择器
    var $imgUl = $snBanner.find('ul:first');
    var $dianUl = $snBanner.find('ul:last');

    var sp = function () {
        $imgUl.animate({ transform: 'translate(' + (-index * snbW) + 'px)' }, 200, 'easing', function () {
            if (index >= 9) {
                index = 1;
                $imgUl.css(transform, 'translate(' + (-index * snbW) + 'px)');
            } else if (index < 1) {
                index = 8;
                $imgUl.css(transform, 'translate(' + (-index * snbW) + 'px)');
            }
            $dianUl.find('li').removeClass('now').eq(index - 1).addClass('now');
        })
    }

    //自动轮播
    var index = 1;
    var timer = setInterval(function () {
        index++;
        sp();
    }, 5000)

    $snBanner.on('swipeLeft', function () {
        index ++;
        sp();
    })
    $snBanner.on('swipeRight', function () {
        index --;
        sp();
    })
})