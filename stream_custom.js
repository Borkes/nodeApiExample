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
    this.push(null); //告诉可读流结束,否则会持续读数据
}

const WriteStream = function() {
    stream.Writable.call(this);
}
util.inherits(WriteStream, stream.Writable);
//重写_stream.Writable中的_write方法
WriteStream.prototype._write = function(chunk, encode, cb) {
    console.log(chunk.toString());
    cb()
}

const TransformStream = function() {
    stream.Transform.call(this);
}
util.inherits(TransfromStream, stream.Transform);

TransformStream.prototype._transform = function(chunk, encode, cb) {
    this.push(chunk);
    cb();
}

TransformStream.prototype._flush = function(cb) {
    this.push('add transfrom information!');
    cb();
}

const rs = new ReadStream();
const ws = new WriteStream();
const ts = new TransformStream();

rs.pipe(ts).pipe(ws);