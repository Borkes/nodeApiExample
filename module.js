const log = console.log.bind(console);
const http = require('http')
const name = require.resolve('./file')
const global = require('./global')
log(require.main === module) //直接运行该文件,true
log(require.main.filename)  //运行入口文件路径
log(name) //返回加载文件的路径
log(module.children) //加载了./global.js文件
log('filename:',module.filename) //当前模块路径
log('parent:',module.parent)  //最先引用该模块的模块,没有被引用为null

