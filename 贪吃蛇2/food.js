(function (window) {

    var f=[];
    //食物构造函数
    function Food(width, height, x, y, color) {
        //设置食物默认样式
        //宽高
        this.width = width || 20;
        this.height = height || 20;
        //位置
        this.x = x || 0;
        this.y = y || 0;
        //颜色
        this.color = color || "black";

    }
    //原型添加方法   渲染render 
    Food.prototype.render = function (map) {

        if(f[0]){
            remove();
        }
        // 创建食物div  jiedian
        var aDiv = document.createElement("div");
        //div宽高
        aDiv.style.width = this.width + "px";
        aDiv.style.height = this.height + "px";
        //食物随机产生位置
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;

        //位置
        aDiv.style.left = this.x + "px";
        aDiv.style.top = this.y + "px";
        //需要移动  添加定位
        aDiv.style.position = "absolute";
        //颜色
        aDiv.style.borderRadius="50%";
        
        this.color="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")"
        aDiv.style.background = this.color;
        map.appendChild(aDiv);
        f.push(aDiv);

    }
    function remove(){
        f[0].parentNode.removeChild(f[0]);
        f.splice(0,1);
    }
    window.Food = Food;
})(window);