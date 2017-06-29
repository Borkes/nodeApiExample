const fs = require('fs');
const log = console.log.bind(console);

//删除文件
/*fs.unlink('/tmp/hello', err => {
    if (err) {
        throw err;
    }
    log('成功删除/tmp/hello')
})
*/

//重命名
/*fs.rename('/tmp/world', '/tmp/hello', err => {
    if (err) {
        throw err;
    }
    //查看文件属性
    fs.stat('/tmp/hello', (err, stats) => {
        if (err) {
            throw err
        }
        log((`文件属性:${JSON.stringify(stats)}`))
    })
})*/

//改变文件权限 chmod [-R] xyz filename
/*fs.chmod('/tmp/hello', '777', (err) => {
    if (err) throw err
    log('改变文件权限')
})*/
//改变文件所有者 chown root:root filename
/*fs.chown('/tmp/hello', 0, 0, (err) => {
    if (err) throw err //会抛出没有权限错误
    log('改变用户所有者')
})*/

//fs.stat会读取到链接的值向的文件,fs.lstat读取链接本身,fs.fstat,参数是文件描述符
//获取文件信息
/*fs.stat('//tmp/hello', (err, stats) => {
    log(stats.isFile()) //stats类实例
    log(stats.isDirectory())
})*/

//文件是否存在fs.exists废弃
fs.existsSync('/tmp/hello')  //true

//读取文件,data是buffer
/*fs.readFile('/tmp/hello', (err, data) => {
    if(err) throw err;
    log('读取文件:', data.toString())
})*/

//写入文件,如果存在则覆盖
/*fs.writeFile('/tmp/world', 'write data!', (err) => {
    if (err) throw err
    fs.readFile('/tmp/world', (err, data) => {
        if(err) throw err;
        log('读取写入的文件:', data.toString())
    })
})*/

//追加数据 默认utf8
/*fs.appendFile('/tmp/hello', 'data to append', (err) => {
    if (err) throw err;
    log('追加文件成功')
})*/

//打开文件 fd文件描述符
/*fs.open('/tmp/hello', 'r+', (err, fd) => {
    if(err) throw err;
    log('读写模式打开文件,不存在抛出异常')
})*/


//读取文件,需要open后的fd文件描述符
/*let buf = Buffer.alloc(1024);
fs.open('/tmp/hello', 'r+', (err, fd) => {
    if (err) throw err;
    // fd是打开文件描述符,buf读取后写入缓存区,偏移量和长度,文件起始位置
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes, buffer) => {
        if(err) throw err;
        if (bytes > 0) {
            //buffer是缓冲区对象
            log(buf.slice(0, bytes).toString(), buffer.toString())
        }
        fs.close(fd, (err) => {
            if (err) throw err;
            log('关闭文件')
        })
    })
})*/

//创建目录 mkdir,默认权限是 0777
/*fs.mkdir('/tmp/dir1', (err) => {
    if (err) throw err;
    log('创建目录成功')
})*/

//读取目录,files是目录下的文件列表
/*fs.readdir('/tmp/', (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        log(file)
    })
})*/

//读取目录,结合stat查看该目录文件的属性
fs.readdir('/tmp/', (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        fs.stat('/tmp/'+file, (err, stat) => {
            if (err) throw err;
            if (stat.isFile()) {
                log(file + ' is file');
            } else if (stat.isDirectory()) {
                log(file + ' is dir')
            } else {
                log(file + ' is not file or dir')
            }
        })
    })
})

//删除目录
/*fs.rmdir('/tmp/dir1', (err) => {
    if(err) throw err;
    log('删除目录成功')
})
*/
