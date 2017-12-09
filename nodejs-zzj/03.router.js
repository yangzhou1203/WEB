const express = require('express');
// const querystring = require('querystring')
const router = express.Router()

router.get('/index.html',(req,res)=>{
    res.send('欢迎访问首页')
})
router.get('/movie.html',(req,res)=>{
    res.send('欢迎访问电影')
})
router.get('/about.html',(req,res)=>{
    res.send('欢迎访问关于')
})
router.post('/api/postinfo',(req,res)=>{
    res.send('你提交的数据:  '+JSON.stringify(req.body))
})
module.exports = router;