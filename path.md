### path

属性
```
path.win32 //处理和windows结果一致
path.posix //处理成posix上的结果一致
path.delimiter //路径分割符,windows';'分号,posix':'冒号
path.sep    //路径片段分割符, windows \ ,posix /
```

方法
```
path.basename(path[,ext]) //返回path的最后一部分,ext文件扩展名
path.dirname(path) //返回一个path的目录名,和path.basename()组合成完整路径
path.extname(path) //返回path的扩展名
path.format(obj)  //根据对象返回路径,path.parse()相反
path.parse(path)  //返回一个对象
path.join([...paths]) //把路径片读组合成路径,都是string
path.relative(from, to) //返回从from到to的相对路径,都是string,如果长度为0,用当前目录
path.resolve([...paths]) //解析成绝对路径


```

