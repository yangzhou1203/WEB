const fs = require('fs');
const path = require('path')
// 记录日志中间件
function myzjj(req,res,next){
    const infoStr = `${new Date().toLocaleString}  ${req.method}  ${req.url}`
    fs.appendFile(path.join(__dirname,'./info.txt'),infoStr,(err)=>{
        if(err) return console.log('记录日志失败')
        console.log('记录日志成功')
        next();
    })
}
module.exports = myzjj;