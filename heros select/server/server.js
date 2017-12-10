// 导入项目入口文件
const express = require('express');
const app = express();
const moment = require('moment');

// 导入Cors 模块  (跨域)
const cors = require('cors')
app.use(cors());

// 解析表单的body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// 创建数据库连接
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'nodesql'
})
// 获取英雄未删除的列表
app.get('/api/getheros', (req, res) => {
    // 定sql语句
    const sqlStr = 'select * from heros where isdel=0'
    conn.query(sqlStr, (err, results) => {
        console.log(results)
        if (err) return res.json({ err_code: 1, message: '获取数据失败', affectedRows: 0 })        
        res.json({ err_code: 0, message: results, affectedRows: 0 })
    })
})



app.listen(5000, function () {
    console.log('Data server running at http://127.0.0.1:5000');
});