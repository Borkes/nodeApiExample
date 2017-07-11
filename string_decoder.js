const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

//const cent = Buffer.from([0xC2, 0xA2]);
const cent = Buffer.from('hello world', 'utf8')
console.log(decoder.write(cent)); //Buffer实例被写入StringDecoder实例

const euro = Buffer.from([0xE2, 0x82, 0xAc])
console.log(decoder.end(euro)); //end方法以字符串的形式返回任何剩下的被保存在内部buffer中的字节
//如果有buffer参数,会再执行一次write()方法
