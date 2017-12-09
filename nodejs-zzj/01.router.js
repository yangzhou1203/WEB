const express = require('express')
const routerObj = express.Router();

routerObj.get('/',(req,res)=>{
    res.send('首页')
})
routerObj.get('/movie',(req,res)=>{
    res.send('电影')
})
module.exports = routerObj;