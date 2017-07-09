const fs = require('fs');
const readStream = fs.createReadStream('test.js');
const writeStream = fs.createWriteStream('test_write.js')
readStream.on('data', (chunk) => {
    if (writeStream.write(chunk) === false) {
        console.log('still cached');
        readStream.pause();
    }
})

readStream.on('end', () => {
    writeStream.end();
})

writeStream.on('drain', () => {
    console.log('data drains');
    readStream.resume();
})

