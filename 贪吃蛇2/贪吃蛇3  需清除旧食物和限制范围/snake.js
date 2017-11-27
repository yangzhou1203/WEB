
//--------创建蛇的构造函数、
(function (window) {
    var f = []
    function Snake(width, height, snwe) {
        this.width = width || 20;
        this.height = height || 20;
        //---------默认方向
        this.snwe = snwe || "right"
        //---蛇长度.位置.颜色

        this.body = [
            { x: 3, y: 2, color: "yellow" },
            { x: 2, y: 2, color: "skyblue" },
            { x: 1, y: 2, color: "skyblue" },
        ]
    }
    Snake.prototype.render = function () {
        remove()
        //--------循环创建三个div。
        for (var i = 0; i < this.body.length; i++) {
            var aDiv = document.createElement("div");
            //-------大小
            aDiv.style.width = this.width + "px";
            aDiv.style.height = this.height + "px";
            //--------位置
            aDiv.style.left = this.body[i].x * this.width + "px";
            aDiv.style.top = this.body[i].y * this.height + "px";
            //---------定位
            aDiv.style.position = "absolute";
            aDiv.style.background = this.body[i].color;
            map.appendChild(aDiv);
            f.push(aDiv);
        }
    }

    //---------原型添加移动方法
    Snake.prototype.move = function (food, map) {
        //----------循环蛇的每一项  把前一项的xy赋给后一个
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //----------蛇头走的方向
        switch (this.snwe) {
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

        //----------获取蛇头的坐标
        var tx=this.body[0].x*this.width;
        var ty=this.body[0].y*this.height;
        //----------获取食物的坐标
        var fx=food.x;
        var fy=food.y;

        if(tx==fx&&ty==fy){
            //把最后一节蛇存起来给新的蛇身
            var last=this.body[this.body.length-1];
            var newJie={
                x:last.x,
                y:last.y,
                color:last.color
            }
            //把新蛇身 添加到里面
            this.body.push(newJie);
            //先把之前渲染的食物删除  再渲染新的食物；
            food.render(map)
        }
        
    }

    function remove() {
        for (var i = 0; i < f.length; i++) {
            f[i].parentNode.removeChild(f[i]);
        }
        f = [];
    }
    window.Snake = Snake;
})(window)