
setTimeout(() => {
    console.log('timeout')
}, 0)

setImmediate(() => {
    console.log('immediate')
})
//timeout 和 immediate执行顺序是随机的

const fs = require('fs');
fs.readFile('test.js', () => {
    setTimeout(() => {
        console.log('timeout_fs');
    }, 0);
    setImmediate(() => {
        console.log('immediate_fs');
    })
})
//immediate_fs总是在timeout_fs的前面


