const http = require('http');
const https = require('https');
const fs = require('fs');
const log = console.log.bind(console);

/*
http.Server
http.ClientRequest
http.Agent
http.ServerResponse -> res
http.IncomingMessage -> req
 */

//http.createServer([requestListener]) //返回一个http.Server实例
//http.get(options[, callback])  //返回一个http.ClientRequest实例
//http.request(options[, callback]) //返回一个http.ClientRequest实例

http.get('http://nojs.org/dist/index.json', (res) => {
    //与http.request() 区别在与自动设置GET,自动调用req.end()
})

//Server实例
//'request' function(req, res) {} 对应http.IncomingMessage,http.ServerResponse实例
//server.listen(port)


//options如果是字符串,可以通过url.parse()自动解析
let postData = JSON.stringify({
    'msg': 'Hello world'
})
let options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST', //GET和http.get()一样
    headers: {
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Connection': 'Keep-Alive'
    }
}
//req可写流,res可读流
let req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        log('body:', chunk);
    })
})
req.on('error', (e) => {
    log('request error: ', e.message)
})
req.write(postData);
req.end();

//返回http.Server实例, req可读流,res可写流
let server = http.createServer((req, res) => {
    let body = ''
    req.setEncoding('UTF8');
    req.on('data', (chunk) => {
        body += chunk
    });
    req.on('end', () => {
        res.write(body + '\n');
        return res.end()
    })
}).listen(8080);


//https
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
https.createServer(httpsOptions, (req, res) => {
    //https创建服务器需要key,cert
}).listen(8090)