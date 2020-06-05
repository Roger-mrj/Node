var http = require('http')
var server = http.createServer()

server.on('request', function (request, response) {
  //这里的request.url是指的端口后面的'/.....'
  console.log('收到客户端的请求了,请求路径是：' + request.url);

  //response有write和end方法，write是在浏览器中想要显示的内容，end函数表示显示结束，不管有多少个write，都要最后跟end
  //这里定义了不同的url显示的不同的内容
  if (request.url == '/login') {
    response.write('denglu')
    response.end()
  }else if(request.url=="/register"){
    response.write('zhuce')
    response.end()
  } 
  else {
    response.write('hello node.js')
    response.end()
  }
})

server.listen(8080, function name(params) {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:8080/ 来进行访问')
})