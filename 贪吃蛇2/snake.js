//蛇对象需要属性  长度  大小   颜色   位置    蛇头方向
(function (window) {
    var snakegather = []
    function Snake(width, height, snwe) {
        this.width = width || 20;
        this.height = height || 20;

        this.body = [
            { x: 3, y: 3, color: "pink" },
            { x: 2, y: 3, color: "skyblue" },
            { x: 1, y: 3, color: "skyblue" },

        ]
        this.snwe = snwe || "right";
    }
    Snake.prototype.render = function (map) {
        remove();
        for (var i = 0; i < this.body.length; i++) {
            var aDiv = document.createElement("div");
            //大小
            aDiv.style.width = this.width + "px";
            aDiv.style.height = this.height + "px";

            // 位置
            aDiv.style.left = this.body[i].x * this.width + "px";
            aDiv.style.top = this.body[i].y * this.height + "px";

            //移动需要添加定位
            aDiv.style.position = "absolute";

            //颜色
            aDiv.style.borderRadius = "50%";
            aDiv.style.background = this.body[i].color;

            map.appendChild(aDiv);

            snakegather.push(aDiv);
        }
    }
    //添加移动方法
    Snake.prototype.move = function (food, map) {
        for (var i = this.body.length - 1; i > 0; i--) {
            //前一节xy 给后一个
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;

        }
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

        // 判断蛇头和食物坐标是否一致
        //蛇头坐标
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        // 食物坐标
        var foodX = food.x;
        var foodY = food.y;

        if(headX==foodX&&headY==foodY){
            var last=this.body[this.body.length-1];

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
        for (var i = 0; i < snakegather.length; i++) {
            snakegather[i].parentNode.removeChild(snakegather[i]);
        }
        snakegather = [];
    }
    window.Snake = Snake;
})(window)