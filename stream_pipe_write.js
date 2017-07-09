const fs = require('fs');
const readStream = fs.createReadStream('test.js');
const writeStream = fs.createWriteStream('test_write.js')
readStream.pipe(writeStream)