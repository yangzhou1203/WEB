
(function (window) {
    var oldFood = [];
    //食物对象
    //构造函数  构造食物
    function Food(width, height, x, y, color) {
        //把一些属性进行添加  并且给一些默认初始化数据
        this.width = width || 20;
        this.height = height || 20;
        //将坐标先挂载到属性上
        this.x = x || 0;
        this.y = y || 0;
        //颜色默认
        this.color = color || "green";
    }

    Food.prototype.render = function (map) {
        if (oldFood[0]) {
            remove();
        }

        //将食物随机产生  放在页面上
        //用地图的宽度width/食物的宽度=40  然后取整
        //parseInt取整  取到0-39之间的随机整数(0-39) *20  ====(0---780之间的随机整数一定是20的倍数)  
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;//(800/20)
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

        //通过dom元素节点方式创建
        var oDiv = document.createElement("div");
        //给div加宽高
        oDiv.style.width = this.width + "px";
        oDiv.style.height = this.height + "px";
        //给div添加位置
        oDiv.style.left = this.x + "px";
        oDiv.style.top = this.y + "px";
        //想要食物在页面上根据left和top值进行随机位置  就需要让他相对于地图进行绝对定位
        oDiv.style.position = "absolute";
        //添加颜色
        oDiv.style.borderRadius = "50%";
        this.color="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"
        oDiv.style.background = this.color;
        //需要将创建好的div节点放入地图中

        map.appendChild(oDiv);
        oldFood.push(oDiv);

    }
    function remove() { 
        oldFood[0].parentNode.removeChild(oldFood[0]);
        oldFood.splice(0,1);
    }
    window.Food = Food;
})(window)