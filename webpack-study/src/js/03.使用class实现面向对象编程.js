/* // 创建一个Person类
class Person {
  // 在 class 的 { } 作用域中，只能写 constructor 函数，静态方法、静态属性、实例方法
  // 在 class 类中，必须有一个 constructor，如果你没有显示定义，则 系统会默认提供一个看不见的constructor

  // 如果用户显示定义了一个 constructor， 则会把默认的那个看不见的 constructor 给 覆盖掉
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}


//创建一个广东人的类
class GDRen {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
} */


// ---------------------------------------------------------------------

// 创建一个Person类
class Person {
  // 在 class 的 { } 作用域中，只能写 constructor 函数，静态方法、静态属性、实例方法
  // 在 class 类中，必须有一个 constructor，如果你没有显示定义，则 系统会默认提供一个看不见的constructor

  // 如果用户显示定义了一个 constructor， 则会把默认的那个看不见的 constructor 给 覆盖掉
  constructor(name, age) {
    console.log('ok')
    this.name = name
    this.age = age
  }

  // 实例方法
  sayHello() {
    console.log('我的名字是：' + this.name)
  }
}


//创建一个广东人的类
class GDRen extends Person {
  // 什么叫面向对象？？？
  // 记住这一句就行了：面向对象，就是【封装】、极致的封装就是面向对象；什么是极致的封装呢：【封装、继承、多态】
  // 面向对象，就是把 一些功能性的代码，封装到 具体的 类中，如果需要什么功能，就 new 什么样类，这样，即提高的代码的复用性，提高了开发的效率和协作开发的体验；
  // 谈编程的发展历史      面向过程（函数式编程）   ->  面向对象（以对象的形式来组织代码）
  constructor(name, age, eathobby) {
    // super 这个函数，引申为 父类的构造函数
    // 注意： 如果 子类 通过  extends 关键字，实现了继承，那么，子类的构造函数中，必须先调用一下 super 这个父类的构造函数，才能使用 this 
    console.log('ook')
    super(name, age)
    console.log('esc')
    this.eathobby = eathobby
  }
}










// var p1 = new Person('高婆婆', 26)

// console.log(p1)


var gd1 = new GDRen('xjj', 18, '福建人')
console.log(gd1)
gd1.sayHello()