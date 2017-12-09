const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
app.use(mzjj)
app.get('/index.html', (req, res) => {
    res.send('<h1>主页</h1>')
})
app.listen(3000, () => {
    console.log('Express server running at http://127.0.0.1:3000')
})
// 定义一个写入日志的中间件
function mzjj(req, res, next) {
    const infoStr = `${new Date().toLocaleString()}  ${req.method}  ${req.url}\n`
    fs.appendFile(path.join(__dirname, './info.txt'), infoStr, (err) => {
        if (!err) console.log('写入OK')

        next()
    })
}