const fs = require('fs');
const log = console.log.bind(console);
let readStream = fs.createReadStream('test.js');
let n = 0;
readStream
    .on('data', (chunk) => {
        n++;
        //log(chunk.toString('utf8'));
        log('data emits');
        readStream.pause();
        log('data pause');
        setTimeout(() => {
            log('data pause end');
            readStream.resume()
        }, 3000)
    })
    .on('readable', () => {
        log('data, readable'); //文件可读
    })
    .on('end', () => {
        log(n)
        log('data ends'); //data数据流传递结束,至出现一次
    })
    .on('close', () => {
        log('data close')
    })
    .on('error', () => {
        log('data read error')
    })