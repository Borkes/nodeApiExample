const log = console.log.bind(console);

log(1);

//
setImmediate(() => {
    log(7);
})

//下一轮事件循环,延迟为0则是下一轮时间循环开始
setTimeout(() => {
    log(6);
}, 0)  //0和1效果一样


//微任务,在定时器之前执行
Promise.resolve().then(() => {
    log(4);
}).then(() => {
    log(5);
})

//在定时器之前执行,本轮循环结束执行
process.nextTick(() => {
    log(3)
})

log(2);