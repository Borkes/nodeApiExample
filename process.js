const log = console.log.bind(console);

process.on('beforeExit', (code) => {
    log('beforeExit:', code)
})

/*process.on('exit', (code) => {
    log('exit:', code)
})
process.exit(2)
*/

/*process.on('uncaughtException', (err) => {
  log(err)
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// 故意调用一个不存在的函数，应用会抛出未捕获的异常
nonexistentFunc();
console.log('This will not run.');*/

//process.abort()
//process.arch
//process.argv
//process.execPath
//process.argv[0]
//process.config
//process.env
//process.platform
log(process.release)

//process.chdir('/tmp')
//process.cwd()
//process.cpuUsage()
//process.execArgv
//process.memoryUsage()
//process.uptime()
log(process.versions)

/*var num1,num2
process.stdout.write('num1:')
process.stdin.on('data', (chunk) => {
    if(!num1) {
        num1 = Number(chunk);
        process.stdout.write('num2:');
    }else{
        num2 = Number(chunk);
        process.stdout.write('answer:' + (num1 + num2))
    }
})*/



