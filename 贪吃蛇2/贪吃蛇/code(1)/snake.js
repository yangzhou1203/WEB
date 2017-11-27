	
// 蛇对象： 属性和方法
/*蛇的属性:
    width 20  
    height  20
    
    body = [蛇头,蛇身1,蛇身2]
    
    body = [
      {x:3,y:2,color:"red"},
      {x:2,y:2,color:"pink"},
      {x:1,y:2,color:"pink"}
    ]
    
    蛇的身体 有三节
    每一节部分都有这些信息 所以可以用对象json格式去描述
	 蛇的颜色 (color)
	 蛇的位置 ( x y)

    蛇头的方向 默认先让蛇向右   direction

方法: 让蛇产生并且先放置在页面上  渲染方法  render */

// 利用函数的立即执行表达式进行代码的封装  设定命名空间  实现代码模块化
(function(window){
	// 创建一个蛇的数组变量 用来存往页面里面添加的蛇节
	var snakeEles = [];
	
	
	// 创建蛇的构造函数
	function Snake(width,height,direction) {
		// 添加了一些宽高属性 给了一个默认值
		this.width = width || 20;
		this.height = height || 20;
		// 设置蛇的身体
		this.body = [
		 {x:3,y:2,color:"red"},//蛇头
		 {x:2,y:2,color:"orange"},// 蛇身1
		 {x:1,y:2,color:"orange"}// 蛇身2
		];
		// 设置蛇头方向
		this.direction = direction || "right";
	}
	// 让蛇产生并且先放置在页面上  渲染方法  render
	Snake.prototype.render = function(map){
		// 执行一个删除方法 将之前的页面上的蛇删除
		remove();
		// 根据body蛇节数量 循环生成3个div 分别放入地图中
		for(var i = 0; i < this.body.length; i++) {
			
			// 采用dom创建节点的方式进行创建
			var oDiv = document.createElement("div");
			
			oDiv.style.width = this.width + "px";
			oDiv.style.height = this.height + "px";
			// 让创建好的节点div 的left 值等于body的第i个里面的x坐标  x  格子单位20 = 真正的页面中的位置
			oDiv.style.left = this.body[i].x * this.width + "px";
			oDiv.style.top = this.body[i].y * this.height + "px";
			// 需要个div设置绝对定位
			oDiv.style.position = "absolute";
			
			// 给蛇节分别设置颜色
			oDiv.style.backgroundColor = this.body[i].color;
			// 将创建好的蛇节放入到页面地图中
			map.appendChild(oDiv);
			// 同时把当前的蛇节 存入一个数组里面  
			snakeEles.push(oDiv);
		}
		//给蛇的构造函数的原型上 添加一个移动方法
		Snake.prototype.move = function(){
			
			// 想要让蛇往前挪 每挪一下
			for(var i = this.body.length-1; i > 0; i--) {
				        /* 第三节.x = 第二节.x   
				         	第二节.x = 第一节.x*/
				this.body[i].x = this.body[i-1].x;
				this.body[i].y = this.body[i-1].y;
			}
			// 蛇头的往哪走 取决于方向
			switch (this.direction){
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
			
		}
		
		function remove(){
			for(var i = 0; i < snakeEles.length; i++) {
				
				snakeEles[i].parentNode.removeChild(snakeEles[i]);
				
			}
			snakeEles = [];
		}
	}
	
	// 暴露出去
	window.Snake = Snake;
	
})(window);