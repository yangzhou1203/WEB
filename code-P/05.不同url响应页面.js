const http = require('http');
const fs = require('fs')
const path = require('path')
const server = http.createServer();
server.on('request', (req, res) => {
    const method = req.method.toLowerCase();
    const url = req.url
    if (method === 'get' && url === '/views/index.html') {
        readHtmlFile(res, url);
    }else if(method === 'get' && url === '/assets/css/index.css'){
        readHtmlFile(res, url);
    }else if(method === 'get' && url === '/assets/images/5.jpg'){
        readHtmlFile(res, url);
    }else if(method === 'get' && url === '/assets/js/index.js'){
        readHtmlFile(res, url);
    }else{
        res.end('请求炸了')
    }
})

function readHtmlFile(res, url) {
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
}

server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})
