//定时器,预订定时器,取消定时器
//全局提供
/**
 * Immediate类内部创建,从setImmediate()返回,可以做参数传给clearImmediate()取消动作
 * Timeout类内部创建,从setTimeout(), setInterval()返回,传给clearTimeout(),clearInterval()
 */

const util = require('util');
const setImmediatePromise = util.promisify(setImmediate);
setImmediatePromise('foobar').then((value) => {
    console.log('setImmediate value:', value);
})

async function timerExample() {
    console.log('before I/O callbacks');
    await setImmediatePromise();  //value: foobar
    console.log('after I/O callbacks')
}
timerExample()

const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(40, 'foobar').then((value) => {
    console.log('setTimeout value:', value)
})

function User(login) {
    this.login  = login;
    this.sayHi = () => {
        console.log('user:',this.login); //注意作用域
    }
}
const user = new User('mhq');
setTimeout(user.sayHi, 1000) //setTimeout中执行的函数是在全局作用域,this指向全局

class UserClass {
    constructor(login){
        this.login = login;
    }
    sayHi() {
        console.log('class user:', this.login); //undefined, this指向全局
    }
}
const userc = new UserClass('mhq');
setTimeout(userc.sayHi, 1000)   //可以绑定this,userc.sayHi.bind(userc)

//setInterval()与setTimeout()基本一致,只是setInterval会无限定时执行
//其运行机制是将指定代码移出本次执行,等下一轮Event Loop检查指定时间,如果到了就执行,没到就等下一轮
//所以无法保证按照预订的时间执行
/**
 * setTimeout(f, n), n=0也不会立刻执行,需要等待当前同步任务和事件队列执行结束,同时考虑性能
 * n>4ms,浏览器内部使用32为带符号整数,最多推迟执行2^32 -1ms(24.8天)
 */


