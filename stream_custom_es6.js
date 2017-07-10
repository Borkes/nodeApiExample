const stream = require('stream');
//const {Readable, Writable, Transform} = require('stream')

//用es6可以使的继承更容易理解
class ReadStream extends stream.Readable{
    constructor() {
        super();
    }
    _read() {
        this.push('I ');
        this.push('love you \n');
        this.push(null);
    }
}

class WriteStream extends stream.Writable{
    _write(chunk, encode, cb) {
        console.log(chunk.toString());
        cb()
    }
}

class TransformStream extends stream.Transform{
    _transform(chunk, encode, cb) {
        this.push(chunk);
        cb();
    }
    _flush(cb) {
        this.push('add transform information');
        cb()
    }
}

const rs = new ReadStream();
const ws = new WriteStream();
const ts = new TransformStream();

rs.pipe(ts).pipe(ws);
