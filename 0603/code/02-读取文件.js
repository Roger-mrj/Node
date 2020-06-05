//1、使用require加载fs
var fs = require('fs')

//2、读取文件
/*fs.readFile('../data/hello.txt',function(error,data){
  console.log(data.toString())
  if(error){
    console.log('读取文件失败')
  }else{
    console.log(data.toString())
  }
})*/
fs.readdir('../data',function (error,files) {
  console.log(files)
})