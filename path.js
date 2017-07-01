const path = require('path');
const log = console.log.bind(console);


log(path.basename('/tmp/world.txt', '.txt'))
log(path.basename('/tmp/world.txt'))
log(path.dirname('/tmp/world.txt'))
log(path.extname('/tmp/world.txt')) // 'txt'
log(path.extname('/tmp/world.txt.html')) // 'html'
log(path.extname('/tmp/world.')) // '.'
log(path.extname('/tmp/world')) // ''
log(path.extname('/tmp/.txt')) // '' .开头的是隐藏文件
log(path.format({
    root: '/root',
    dir: '/tmp',
    base: 'world'
})) // /tmp/world, 有dir忽略root
log(path.relative('/home/test', '/tmp/world.txt')) // ../../tmp/world.txt

