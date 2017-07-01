### module


```
const name = require.resolve('./file'); //返回加载文件路径,参数是自定义或第三方模块
require.main.filename //运行的入口文件名
require.main === module //如果运行的是当前文件(模块),则为true
module 每个模块的本地对象
module.children  //该模块加载的模块
module.filename  //该模块当前路径
module.parent    //最先引用该模块的模块,没有被引用则为null
```

避免循环加载:

```
a.js:
console.log('a 开始');
exports.done = false;
const b = require('./b.js');
console.log('在 a 中，b.done = %j', b.done);
exports.done = true;
console.log('a 结束');
```
```
b.js
console.log('b 开始');
exports.done = false;
const a = require('./a.js');
console.log('在 b 中，a.done = %j', a.done);
exports.done = true;
console.log('b 结束');
```
```
main.js
console.log('main 开始');
const a = require('./a.js');
const b = require('./b.js');
console.log('在 main 中，a.done=%j，b.done=%j', a.done, b.done);
```
输出:
```
main 开始
a 开始
b 开始
在 b 中，a.done = false
b 结束
在 a 中，b.done = true
a 结束
在 main 中，a.done=true，b.done=true
```

mudule.exports的赋值必须是立即完成,不能在回调中完成,以下是无效的
```
setTimeout(() => {
    module.exports = {a: 'hello'}
})
```

