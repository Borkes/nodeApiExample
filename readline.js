const readline = require('readline');

/*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
*/

/*rl.question('hello ', (data) => {
    //do somethings for data
    console.log('thanks:', data);
    rl.close()
})*/

//\n \r \r\n触发'line' 事件,通常Enter,或者Return键
/*rl.on('line', (input) => {
    console.log(`接收到: ${input}`);
})*/

//input流被暂停触发,ctrl+c退出时input暂停
/*rl.on('pause', () => {
    console.log('Readline 被暂停');
})*/

//readline.clearLine(process.stdout, 0)

//input被恢复时触发
/*rl.on('resume', () => {
    console.log('Readline 被恢复');
})*/

//简单的命令行界面
const rltty = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入>'
})

rltty.prompt();
rltty.on('line', (line) => {
    switch(line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log(`your input is ${line.trim()}`);
            break;
    }
    rltty.prompt();
}).on('close', () => {
    console.log('bye!')
    process.exit(0)
})



