const net = require('net');
const log = console.log.bind(console);
const HOST = '127.0.0.1';
const PORT = 8080

const client = new net.Socket();
//net.connect() 工厂方法也会返回一个'net.Socket'
client.connect(PORT,HOST, () => {
    log('connected: ', HOST + ':' + PORT);
    client.write('client send to server');
})

client.on('data', (data) => {
    log('data: ', data.toString());
    client.destroy(); //关闭链接
})

client.on('close', () => {
    log('connection closed')
})