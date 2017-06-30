const stream = require('stream');
const http = require('http');
const log = console.log.bind(console);
const fs = require('fs');
const zlib = require('zlib')
/*
Readable -可读流
Writable -可写流
Duplex   -可读写流
Transform 转换流,读写中可以修改
内部可写缓存总大小小于highWaterMark指定的阈值时,writable.write()返回true,否则返回false
*/
/*
可读流:
http responses, on the client
http requests, on the server
fs read steams
ziib streams
crypto streams
tcp sockets
child process stdout and stderr
process.stdin

可写流
http requests, on the client
http responses, on the server
fs write streams
zilb streams
crypto streams
tcp sockets
child process stdin
process.stdout, process.stderr
*/

//读取文件
/*let data= '';
let readerStream = fs.createReadStream('/tmp/world.txt')
readerStream.setEncoding('UTF8');
readerStream.on('data', (chunk) => {
    data += chunk;
})
readerStream.on('end', () => {
    log(data);
})
readerStream.on('error', (err) => {
    log(err.stack);
})*/

//文件没有会重新创建,有会覆盖
/*let writeData = 'write something into world.txt';
let writerStream = fs.createWriteStream('/tmp/mhq.txt');
writerStream.write(writeData, 'UTF8');
writerStream.end();
writerStream.on('finish', () => {
    log('wirte finish')
})
writerStream.on('error', (err) => {
    log(err.stack);
})
*/
// pipe流
//fs.createReadStream('/tmp/world.txt').pipe(fs.createWriteStream('/tmp/world0.txt'))

//http server request ReaderStream
//http server response WriterStream
/*let server = http.createServer((req, res) => {
    let body = ''
    req.setEncoding('UTF8');
    req.on('data', (chunk) => {
        body += chunk
    });
    req.on('end', () => {
        res.write(body + '\n');
        return res.end()
    })
}).listen(8080);*/
//post body方式测试
//curl localhost:8080 -d 'hello' 

//数据如果准备好可以从流中读出,会触发readable事件
/*let readerStream2 = fs.createReadStream('/tmp/world.txt');
readerStream2.on('readable', () => {
    let chunk;
    //read(size),返回字节数的数据,没有数据返回null,没有size返回所有
    while(null !== (chunk = readerStream2.read(1))) {
        log(chunk.toString())
    }
})*/

let r = fs.createReadStream('/tmp/world.txt');
let z = zlib.createGzip(); //既是writeStream, 也是readStream
let w = fs.createWriteStream('/tmp/world.txt.gz')
r.pipe(z).pipe(w);

