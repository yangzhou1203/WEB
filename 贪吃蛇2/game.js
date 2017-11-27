// function bind(obj, evType, evFn) {
//     obj.handle = function () {
//         evFn.call(obj);
//     }
//     if (obj.addEventListener) {    
//         obj.addEventListener(evType, evFn, false);
//         obj.handle = evFn;
//     } else if (obj.attachEvent) {   
//         obj.attachEvent("on" + evType, obj.handle);
//     } else {
//         obj["on" + evType] = evFn;

//     }
// }
function bind(obj, evType, evFn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, evFn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evType, evFn);
    } else {
        obj["on" + evType] = evFn;
    }

}
(function (window) {
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    Game.prototype.begin = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        //调用定时器
        runSnake(this);
        //调用键盘绑定事件
        bindKey(this);
    }
    function runSnake(that) {
        var timer = setInterval(function () {
            that.snake.move(that.food, that.map);


            //蛇头坐标

            var headX = that.snake.body[0].x * that.snake.width;
            var headY = that.snake.body[0].y * that.snake.height;
            //上左为0  右下最大

            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;

            //判断是否与自己相撞
            //获取蛇身坐标
            for (var i = 4; i < that.snake.body.length - 1; i++) {
                if (headX == that.snake.body[i].x * that.snake.width && headY == that.snake.body[i].y * that.snake.height) {
                    clearInterval(timer);
                    alert("撞到自己啦-_-");
                    return;

                }
            }

            //判断范围  超出就结束游戏
            //左右
            if (headX < 0 || headX >= maxX) {
                clearInterval(timer);
                alert("真菜啊");
                return;

            }
            //上下
            if (headY < 0 || headY >= maxY) {
                clearInterval(timer);
                alert("真菜啊");
                return;
            }
            that.snake.render(that.map);

        }, 80)
    }

    //键盘事件
    function bindKey(that) {

        //键盘控制方向
        bind(document, "keydown", function (ev) {
            switch (ev.keyCode) {
                case 37:
                    if (that.snake.snwe != "right") {
                        that.snake.snwe = "left";
                    }
                    break;
                case 39:
                    if (that.snake.snwe != "left") {
                        that.snake.snwe = "right";
                    }

                    break;
                case 38:
                    if (that.snake.snwe != "down") {
                        that.snake.snwe = "up";
                    }
                    break;
                case 40:
                    if (that.snake.snwe != "up") {
                        that.snake.snwe = "down";
                    }

                    break;
            }
        })

    }
    window.Game = Game;
})(window)