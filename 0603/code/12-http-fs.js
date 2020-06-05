var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function (req,res) {
  var url=req.url
  if(url==='/html'){
    fs.readFile('../resource/list.html',function (err,data) {
      if (err) {
        console.log('读取文件失败')
      }else{
        res.setHeader('Content-Type', 'text/html,charset=utf-8');
        res.end(data)
      }
    })
  }else if(url==='/img'){
    fs.readFile('../resource/软件.jpg',function (err,data) {
      if (err) {
        console.log('读取文件失败');
      }else{
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data)
      }
    })
  }
})

server.listen(3000,function () {
  console.log('Server is running...')
})