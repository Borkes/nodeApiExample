const log = console.log.bind(console)
const path = require('path')
// ~表示根目录下路径
log(__dirname, __filename)  //据模块变化而改变
// ~/workSpace/github/apitest ~/workSpace/github/apitest/global.js

log(path.dirname(__filename)) 
// ~/workSpace/github/apitest


/*
exports 和 module.exports
module.exprots初始化为一个空对象
exports指向module.exports的引用
require() 返回的是module.exports
*/
let a = {};
Object.assign(a, {name: 1});
let b = a;
log(a); // {name: 1}
log(b); // {name: 1}
b.name = 2;
log(a); // {name: 2}
log(b); // {name: 2}
b = {name: 3};
log(a); // {name: 2}
log(b); // {name: 3}
// a类似与module.exports b类似于exports