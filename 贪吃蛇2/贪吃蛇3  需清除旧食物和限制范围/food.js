(function (window) {
    //------------默认属性  宽高颜色位置
    function Food(width, height, x, y, color) {
        this.width = width || 20;
        this.height = height || 20;

        this.color = color || "pink";

        this.x = x || 0;
        this.y = y || 0;
    }
    Food.prototype.render = function () {
        var aDiv = document.createElement("div");
        //-----------食物宽高
        aDiv.style.width = this.width + "px";
        aDiv.style.height = this.height + "px";

        //-------------食物随机位置
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        //-------------定位
        aDiv.style.position = "absolute";
        //------------位置
        aDiv.style.left=this.x+"px";
        aDiv.style.top=this.y+"px";
        //-----------颜色
        this.color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
        aDiv.style.background = this.color;
        map.appendChild(aDiv);
    }
    window.Food = Food;
})(window)