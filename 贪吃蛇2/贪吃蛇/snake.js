//蛇对象
(function (window) {
    //创建一个蛇的数组变量  用来网页面里添加的蛇节
    var snakeEles = [];
    //创建蛇的构造函数
    function Snake(width, height, direction) {
        //添加宽高属性默认值
        this.width = width || 20;
        this.height = height || 20;

        //设置蛇的身体
        this.body = [
            { x: 3, y: 2, color: "red" },//蛇头
            { x: 2, y: 2, color: "blue" },//蛇身1
            { x: 1, y: 2, color: "blue" }   //蛇身2      
        ]
        //设置蛇头方向

        this.direction = direction || "right";
    }

    Snake.prototype.render = function (map) {
        //根据body蛇长度  循环三个div  分别放入地图中
        remove();
        for (var i = 0; i < this.body.length; i++) {

            var oDiv = document.createElement("div")

            oDiv.style.width = this.width + "px";
            oDiv.style.height = this.height + "px";
            //创建好的div的left值 等于  body的第i个里面的x坐标  格子单位20
            oDiv.style.left = this.body[i].x * this.width + "px";
            oDiv.style.top = this.body[i].y * this.height + "px";
            oDiv.style.borderRadius = "50%";
            //需要个div设置定位
            oDiv.style.position = "absolute";
            oDiv.style.backgroundColor = this.body[i].color;
            map.appendChild(oDiv);
            //蛇的节数存在数组里
            snakeEles.push(oDiv);

        }
        //给蛇的构造函数原型添加一个移动方法
        Snake.prototype.move = function (food,map) {

            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }

            //蛇头方向  
            switch (this.direction) {
                case "right":
                    this.body[0].x += 1;
                    break;
                case "left":
                    this.body[0].x -= 1;
                    break;
                case "up":
                    this.body[0].y -= 1;
                    break;
                case "down":
                    this.body[0].y += 1;
                    break;
            }
            //添加一个判断  在移动的过程中蛇头是否与食物坐标重合  说明吃到了，

            //获取蛇头的坐标  X  Y
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            //获取食物的Xy坐标
            var foodX = food.x;
            var foodY = food.y;
            console.log(headX)
            console.log(headY)
            if (headX == foodX && headY == foodY) {
                //到此说明吃到
                //蛇身体的最后一节用变量存起来
                var last = this.boby[this.body.length - 1];
                var newJie={
                    x:last.x,
                    y:last.y,
                    color:last.color
                }
                    this.body.push(newJie);
                    food.render(map);
               
            }
        }
        function remove() {
            for (var i = 0; i < snakeEles.length; i++) {
                snakeEles[i].parentNode.removeChild(snakeEles[i])
            }
            snakeEles = [];
        }
    }
    window.Snake = Snake;
})(window)