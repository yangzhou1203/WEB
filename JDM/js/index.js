window.onload = function () {
    search();
    banner();
    downTime();
}

var search = function () {

    var searchBox = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_banner');
    var height = banner.offsetHeight;
    // 页面滚动事件
    window.onscroll = function () {
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var opacity = 0;
        if (top < height) {
            opacity = top / height * 0.85;
        } else {
            opacity = 0.85;
        }
        // 颜色设置
        searchBox.style.background = 'rgba(201,21,35,' + opacity + ')';
    }
};
var banner = function () {
    var banner = document.querySelector('.jd_banner');
    // 轮播图
    var imageBox = banner.querySelector('ul:first-child');
    // 点 
    var pointBox = banner.querySelector('ul:last-child');
    var points = pointBox.querySelectorAll('li');
    // 轮播图宽
    var width = banner.offsetWidth;

    var addTransition = function () {
        imageBox.style.transition = 'all 0.3s';
        imageBox.style.webkitTransition = 'all 0.3s';
    }
    var setTranslateX = function (translateX) {
        imageBox.style.transform = 'translateX(' + translateX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    }
    var removeTransition = function () {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    }

    // 定时器开启轮播
    var index = 1;
    var timer = setInterval(function () {
        index++;
        addTransition();
        setTranslateX(-index * width);
    }, 2000);
    // 监听轮播结束跳转第一张图
    imageBox.addEventListener('transitionend', function () {
        if (index >= 9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width);
        } else if (index <= 0) {
            index = 8;
            removeTransition();
            setTranslateX(-index * width);
        }
        setPoint();
    });
    var setPoint = function () {
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove('new');
        }
        points[index - 1].classList.add('new')
    }
    var isMove = false;
    var startX = 0;
    var distanceX = 0;
    imageBox.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        clearInterval(timer);
    })
    imageBox.addEventListener('touchmove', function (e) {
        e.preventDefault();//清除浏览器行为
        isMove = true;
        var moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        removeTransition();
        setTranslateX(-index * width + distanceX);
    });
    imageBox.addEventListener('touchend', function (e) {
        if (isMove) {
            if (Math.abs(distanceX) < width / 3) {
                addTransition();
                setTranslateX(-index * width);
            } else {
                if (distanceX > 0) {
                    index--;
                } else {
                    index++;
                }
                addTransition();
                setTranslateX(-index*width);
            }
        };
        isMove = false;
        startX = 0;
        distanceX = 0;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * width);
        }, 2000);
    });
};

var downTime = function () {

}