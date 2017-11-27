function bind(obj, evType, evFn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, evFn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evType, evFn);
    } else {
        obj["on" + evType] = evFn;
    }

}
//---------事件绑定封装函数

(function (window) {
    //------------整体对象 ，把snake  food   map 对象座位图的属性挂载
    function Game(map) {
        //------------常见一个Game构造函数对象
        this.food = new Food();
        //-----------实例化food对象存在game中
        this.snake = new Snake();
        //-----------实例化snake对象存在game中        
        this.map = map;
    }
    Game.prototype.begin = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
        runSnake(this);
        bindKey(this);
    }
    //---------防止方法暴露  不往原型上加  私有方法
    function runSnake(that) {
        //----------开启定时器   让蛇移动
        var timer = setInterval(function () {
            // console.log(123);
            that.snake.move(that.food, that.map);

            //-------蛇移动之后要删除之前的渲染蛇，再渲染新的蛇到页面上
            that.snake.render(that.map);
        }, 200);
    }
    //添加键盘控制方法

    function bindKey(that) {
        bind(document, "keydown", function (ev) {
            ev = ev || event;
            switch (ev.keyCode) {
                case 37:
                    that.snake.snwe = "left";
                    break;
                case 39:
                    that.snake.snwe = "right";
                    break;
                case 38:
                    that.snake.snwe = "up";
                    break;
                case 40:
                    that.snake.snwe = "down";
                    break;
            }
        })
    }
    window.Game = Game;
})(window)