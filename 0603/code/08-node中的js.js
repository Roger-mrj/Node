//用来获取操作系统（电脑）信息
var os = require('os');

console.log(os.cpus());
console.log(os.totalmem());


//path
var path = require('path');

//获取扩展名
console.log(path.extname('../data/hello.txt'));
