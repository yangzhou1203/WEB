
// 创建一个整体的游戏对象  将里面的小对象们（食物  蛇  地图）    统一起来

// 创建一个游戏的构造函数   Game
// Game的属性：
   //    把小对象们统一作为他的属性挂载
(function(window){
	/*console.log(window.Food);
	console.log(window.Snake);*/
	// 创建一个游戏的构造函数   Game
	function Game(map){
		// 将食物构造函数实例化一下 产生一个实例对象 食物  存到当前的游戏Game构造函数里面的this身上
		this.food = new Food();
		// 把蛇实例化一下 产生一个蛇 把这个蛇挂载到当前的this的属性snake身上
		this.snake = new Snake();
		
		// 把传入的地图对象也挂载到当前的this身上 作为属性存在
		this.map = map;
	}
	// 给游戏添加一个开始游戏 一键触发 就可以让蛇动起来啦
	// 给游戏构造函数的原型上面添加一个方法 开始游戏方法
	Game.prototype.start = function(){
		// 让食物随机产生一个 让食物执行渲染方法
		this.food.render(this.map);
		// 让蛇执行一下渲染方法 将蛇放入页面中
		this.snake.render(this.map);
		
		
		// 不应该让蛇动一下 应该让蛇自动走起来 需要开定时器
		runSnake(this);
	}
	// 我们可以不往构造函数的原型上添加 （这样加 会暴露外面去 ）
	// 如果你想只是在内部使用一下 可以直接写一个函数作为私有方法 外面访问不到
	function runSnake(abc){
		
		var timer = setInterval(function(){
			//console.log(this);// window*/
			
			abc.snake.move();
			// 在渲染蛇之前先删除原来页面上渲染的蛇  再去渲染新的蛇放到页面上去
			abc.snake.render(abc.map);
		},100);
		
		
	}
	
	
	// 暴露出去
	window.Game = Game;
})(window);
	     