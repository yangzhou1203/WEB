function Person(name, age) {
  // 这里的 name 和 age 叫做 实例属性【只能通过实例对象，点 出来的属性，叫做实例属性】
  this.name = name
  this.age = age
}
// 原型方法     实例方法
Person.prototype.showName = function () {
  console.log('我是：' + this.name)
}

// 这里的 info 叫做 静态属性【直接使用 构造函数 点 出来的属性，叫做 静态属性】
Person.info = '这是function构造函数'

var p1 = new Person('zs', 22)
/* console.log(p1.age)
console.log(Person.info) */
/* p1.showName() */








// 使用 class 定义的 ，叫做类
class Per {
  // constructor 是构造函数的意思
  // 每当 new Per() 的时候，必然会优先调用 Per 上的  constructor
  constructor(name, age) {
    // console.log('ok')
    this.name = name
    this.age = age
  }

  // static 是关键字，专门用来创建静态属性的
  static info = '这是使用class关键字定义的类'

  // 静态方法：
  static show() {
    console.log('这是静态的show方法')
  }

  // 实例方法
  showName() {
    console.log('我是' + this.name)
  }
}

var p2 = new Per('ls', 13)
// console.log(p2.name)// 实例属性【通过类的实例，点出来的属性】
// console.log(Per.info) // 静态属性【通过类直接点出来的属性】
// 调用静态方法
// Per.show()

// console.log(p2)
p2.showName()