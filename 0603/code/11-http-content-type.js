var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {

  //在服务器默认发送的数据，其实是UTF8编码的内容
  //但是浏览器不知道你是UTF8编码的内容
  //浏览器不知道服务器响应内容的编码的情况下会按照当前操作系统（GBK）的默认编码去解析
  //我们的中文操作系统默认的编码是GBK
  //解决方法就是正确的告诉浏览器我给你发送的内容是什么编码格式
  //在http协议中，Content——Type就是用来告知对方我给你发送的数据内容是什么类型
 /* res.setHeader('Content-Type','text/plain;charset=utf-8')
  res.end('世界')*/
  var url = req.url;
  if (url=='/plain'){
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('hello 世界')
  }else if(url=='/html'){
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<p>你好 Node.js</p>')
  }
});

server.listen(3000,function () {
  //url为172.0.0:3000
  console.log('Server in running...');
});