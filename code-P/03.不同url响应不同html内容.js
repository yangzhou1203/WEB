const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    const url = req.url;

    const method = req.method.toLowerCase()

    res.writeHeader(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })

    if (method === 'get' && url === '/index.html') {
        res.end('<h1>首页</h1>')
    } else if (method === 'get' && url === '/bb.html') {
        res.end('<h1>bb</h1>')
    } else if (method === 'get' && url === '/aa.html') {
        res.end('<h1>aa</h1>')
    } else {
        res.end('<h1>请求炸了</h1>')
    }

})
server.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})