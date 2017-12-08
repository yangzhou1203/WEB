// 引入模块
const http = require('http')
// 创建服务器
const server = http.createServer();

// 为服务器绑定一个事件  request事件  在服务器收到客户端请求的时候出发

server.on('request',(req,res)=>{
    res.end('出发')
})
// 开启服务器
server.listen(3000,function(){
    console.log('服务器启动')
})