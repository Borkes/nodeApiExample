const stream = require('stream');
const util = require('util');

const ReadStream = function() {
    stream.Readable.call(this);
}
util.inherits(ReadStream, stream.Readable);

//重写stream.ReadStream中的_write方法
ReadStream.prototype._read = function() {
    this.push('I ');
    this.push('love ');
    this.push('you\n');
}

const WriteStream = function() {
    stream.Writable.call(this);
}
util.inherits(WriteStream, stream.Writable);
//重写_stream.Writable中的_write方法
WriteStream.prototype._write = function(chunk, encode, cb) {
    console.log(chunk);
    cb()
}

const Transfrom = function() {
    stream.Transform.call(this);
}
util.inherits(Transfrom, stream.Transform);

Transfrom.prototype._transform = function(chunk, encode, cb) {
    this.push(chunk);
    cb();
}

Transfrom.prototype._flush = function(cb) {
    this.push('add transfrom information!');
    cb();
}

const rs = new ReadStream();
const ws = new WriteStream();
const ts = new Transfrom();

rs.pipe(ts).pipe(ws)
