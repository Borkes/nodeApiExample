### process

#### 事件处理
程序退出前触发,code=0, 显示终止,如process.exit(),抛出异常不会触发该事件
```
process.on('beforeExit', (code) => {
    log('beforeExit:', code)
})
```

程序退出或者调用process.exit()触发
```
process.on('exit', (code) => {
    log('exit:', code)
})
process.exit(2)
```

在同步代码情况下，当未处理异常列表增长时，会触发'uncaughtException'事件。
在异步代码情况下，当未处理异常列表增长时，会触发'uncaughtException'事件，当未处理列表收缩时，会触发'rejectionHandled'事件。
api上的一个例子,Map会随着时间增加和缩减,表明rejections开始是被处理状态,然后变成已处理.
```
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, p) => {
  unhandledRejections.set(p, reason);
});
process.on('rejectionHandled', (p) => {
  unhandledRejections.delete(p);
});
```

'uncaughtException'事件监听器的回调函数,使用Error objcet作为唯一参数
```
process.on('uncaughtException', (err) => {
  log(err);
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// 故意调用一个不存在的函数，应用会抛出未捕获的异常
nonexistentFunc();
console.log('This will not run.');
```

'warning'事件,一旦检测到应用性能问题或者缺陷,node.js都会发出警告,回调函数只有一个Error对象参数
```
process.on('warning', (warning) => { //warning有三个属性
    log(warning.name) 
    log(warning.message)
    log(warning.stack) //警告的堆栈信息
})
```

#### 属性
```
process.arch        //运行的处理器架构的字符串, 'arm', 'ia32', 'x64'等
process.argv        //运行node进程的命令行参数,数组
process.execPath    //node执行绝对路径
process.execArgv    //特定的命令行选项, node --harmony srcipt.j ['--harmony']
process.config      //返回一个js对象,描述当前node执行配置信息
process.platform    //返回运行操作系统平台 'darwin' 'freebsd' 'linux' 'sunos' 'win32'
process.env         //返回一个包含用户环境信息的对象,也可以增加属性
process.env.test = 'test' //配置文件上区分使用环境
delete process.env.test   //删除属性
process.version     //node运行版本
```

#### 方法

```
process.chdir('/tmp')  //改变当前node进程当前工作目录
process.cwd()         //显示当前进程工作目录
process.cpuUsage()    //返回当前进程的用户cpu时间和系统cpu时间
process.memoryUsage() //返回内存使用情况的对象
```

```
process.nextTick(callback[,...args]) //将任务放到当前事件循环的尾部
setTimeout(f, 0) //将任务放到下一次事件循环的头部
```




