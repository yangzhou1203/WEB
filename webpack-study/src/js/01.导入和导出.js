var a = 10

// module.exports 是和 require 配合使用的
// 在 ES6中，export default 是和 import *** from '标识符' 配合使用的
export default {
  a,
  b: 20
}

export var c = '哈哈哈'
export var d = 'OOOO'

/* export default {
  age: 22
} */


// 结论1： 在模块中，使用 export default 向外暴露成员，只能有唯一的一个 export default
// 结论2： 使用 export default 向外暴露的成员对象，可以使用任何合法的变量名来接收！
// 结论3： export default 和 export 可以同时使用；
// 结论4： 使用 import 变量名 from '标识符' 这种形式导出得到的变量，默认只能拿到 export default 导出的成员，拿不到 export 导出的成员！
// 结论5： 使用 export 导出的成员，只能使用  import { 成员名 } from '标识符' 来进行接收！（这种 { } 导出成员的形式，叫做按需导出）
// 结论5： export 导出成员，可以导出多次，没有次数限制！同时，export 导出的成员，必须按照导出的名称来接收，如果想要起别名，需要使用 as 关键字 import { c, d as dd } from '标识符'
//  结论6： 按需导出的时候， 接收的顺序可以任意调整！