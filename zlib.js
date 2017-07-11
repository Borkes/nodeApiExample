const zlib = require('zlib');
const fs = require('fs')

const gzip = zlib.createGzip();
const inp = fs.createReadStream('test.js');
const out = fs.createWriteStream('test.js.gz')

inp.pipe(gzip).pipe(out);

const input = '.........';

zlib.deflate(input, (err, buffer) => {
    if (!err) {
        console.log(buffer.toString('base64')); //eJzT04MCAAgfAZ8=
    } else {
        throw err;
    }
})

const buffer = Buffer.from('eJzT04MCAAgfAZ8=', 'base64');

zlib.unzip(buffer, (err, buffer) => {
    if (!err) {
        console.log(buffer.toString());
    } else {
        throw err
    }
})



