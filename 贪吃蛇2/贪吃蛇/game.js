function bind(obj, evType, evFn) {
    obj.handle = function () {
        evFn.call(obj);
    }
    if (obj.addEventListener) {
        // 标准浏览器走这个绑定
        obj.addEventListener(evType, evFn, false);
        obj.handle = evFn;
    } else if (obj.attachEvent) {
        //IE6 7 8 走这个绑定方式
        obj.attachEvent("on" + evType, obj.handle);
    } else {
        // 以上方法都不支持的很老的浏览器 走这个方法
        obj["on" + evType] = evFn;

    }
}
(function (window) {

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }

    //给游戏添加一个开始游戏  一件触发
    //给游戏构造函数的原型添加一个方法  开始游戏方法
    Game.prototype.start = function () {
        //让食物随机产生一个
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake(this);
        //将蛇的方向控制作为私有方法  进行编写
        //键盘绑定事件方法
        bindKey(this);
    }
    function runSnake(that) {
        var timer = setInterval(function () {
            that.snake.move(that.food, that.map);
            //先获取蛇头坐标 
            var headX = that.snake.body[0].x * that.snake.width;
            var headY = that.snake.body[0].y * that.snake.height;
            //地图上左边0上面0   最右边maxX  最下面maxY
            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;

            if (headX < 0 || headX >= maxX) {
                clearInterval(timer);
                alert("Game Over");
                return;
            }
            if (headY < 0 || headY >= maxY) {
                clearInterval(timer);
                alert("Game Over");
                return;                
            }
            that.snake.render(that.map);
        }, 200);
    }

    //键盘控制方向方法
    function bindKey(that) {
        //在整个document  添加键盘按下事件
        //引用封装好的绑定函数
        bind(document, "keydown", function (ev) {
            ev = ev || event;
            switch (ev.keyCode) {
                case 37:
                    that.snake.direction = "left";
                    break;
                case 39:
                    that.snake.direction = "right";
                    break;
                case 38:
                    that.snake.direction = "up";
                    break;
                case 40:
                    that.snake.direction = "down";
                    break;

            }
        })
    }
    window.Game = Game;
})(window)
