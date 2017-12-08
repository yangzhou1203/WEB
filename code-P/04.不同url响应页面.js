const http = require('http');
const fs = require('fs')
const path = require('path')
const server = http.createServer();
server.on('request',(req,res)=>{
    const method = req.method.toLowerCase();
    const url = req.url
    if(method==='get'&&url==='/views/movie.html'){
        fs.readFile(path.join(__dirname,'/views/movie.html'),(err,data)=>{
            if(err) return res.end('404')
            res.end(data)
        })
    }
})

server.listen(4000, () => {
    console.log('http://127.0.0.1:4000')
  })
