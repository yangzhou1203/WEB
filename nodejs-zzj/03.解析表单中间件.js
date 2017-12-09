
const express = require('express')
const app = express();

// 导入自己记录日志的中间件
// const zjj = require('./03.myzjj.js');
// app.use(zjj)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const router = require('./03.router.js')
app.use(router)


app.listen(3000,function(){
    console.log('http://127.0.0.1:3000')
})