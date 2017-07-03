const net = require('net');
const log = console.log.bind(console);
const HOST = '127.0.0.1';
const PORT = 8080;

//回调函数是处理'connection'事件的
net.createServer((socket) => {
    log('connected:', socket.remoteAddress + ':' + socket.remotePort);
    socket.on('data', (data) => {
        log('data: ', data.toString());
        socket.write('receive data: ' + data); //回复客户端
    })
    socket.on('close', (data) => {
        log('close: ', socket.remoteAddress + ':' + socket.remotePort);
    })
}).listen(PORT, HOST);





