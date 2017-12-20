// 这是项目的入口文件

// 导入Jquery
import $ from 'jquery'

// 【注意：】在webpack 中，把所有的静态资源，都可以看成一个个的模块！
// 导入 CSS 样式表
// import mystyle from './css/index.css'
// 今后，在导入 CSS 样式表的时候，推荐下面的写法：
import './css/index.css'
import './css/index.less'
import './css/index.scss'

// 实现奇偶行变色
$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'yellow')
})


// ES6 中的新语法， 是ES6中实现面向对象编程的新方式
// webpack 默认只能帮我们打包并处理一小部分的ES6新特性，但是无法处理所有的ES6及ES7+新特性
// 在 React 中，class 关键字，是专门用来创建React组件的
class Person {
  // 静态的属性
  static info = { name: 'zs' }
}
// console.log(Person.info)


// 默认情况下： webpack 只能默认打包处理 后缀名是 .js 的文件， 无法处理其它后缀名的文件；
// 如果想要 使用 webpack 打包处理 非 JS 类型的文件，那么，需要在项目中配置合适的loader【You may need an appropriate loader to handle this file type.】

// 1. 如果想要处理  .css 后缀名的 文件，需要安装并配置两个合适的 loader【style-loader 和 css-loader】style-loader 和 css-loader】

// 2. 如果要 处理 .less 后缀名的文件，需要安装并配置 less-loader  less【less 是 less-loader的内置依赖项，不需要把 less 显示的配置到 loader 规则中】

// 3. 如果要处理 .scss 的文件，需要安装并配置 sass-loader node-sass【其中，node-sass是 sass-loader 的内置依赖项】

// 4. 如果要处理 样式表中的 图片路径，则需要安装并配置 url-loader file-loader【file-loader是 url-loader的内置依赖项】

// 5. 如果要处理高级的ES语法，需要安装两套相关的包：
//  5.1 运行 `cnpm i babel-core babel-loader babel-plugin-transform-runtime -D`
//  5.2 运行 `cnpm i babel-preset-env babel-preset-stage-0 -D`
//  5.3 注意： 以 `babel-preset-` 开头的包，叫做 Babel语法； 以 `babel-plugin-`开头的叫做 Babel的插件



// const d = '123'

// import m2, { d, c } from './js/01.导入和导出.js'
// console.log(m2)
// console.log(c)
// console.log(d)

// import './js/02.class实现面向对象编程.js'
import './js/03.使用class实现面向对象编程.js'