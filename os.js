const os = require('os');
const log = console.log.bind(console);

log(os.EOL) //\n POSIX \r\n Windows
log(os.arch()) // 操作系统架构 比如x64
log(os.cpus()) // 数组,每个cpu信息
log(os.freemem()/1024)
log(os.totalmem())
log(os.hostname())
log(os.networkInterfaces())
log(os.platform()) //平台
log(os.release()) //发行版本
log(os.tmpdir()) //临时目录
log(os.type())  //操作系统名
log(os.uptime()) //上线时间,秒
log(os.userInfo())