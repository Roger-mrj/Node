var http = require('http')
var server = http.createServer()

server.on('request', function (request, response) {
  //这里的request.url是指的端口后面的'/.....'
  console.log('收到客户端的请求了,请求路径是：' + request.url);

  //response有write和end方法，write是在浏览器中想要显示的内容，end函数表示显示结束，不管有多少个write，都要最后跟end
  //这里定义了不同的url显示的不同的内容
  // if (request.url == '/login') {
  //   response.write('denglu')
  //   response.end()
  // }else if(request.url=="/register"){
  //   response.write('zhuce')
  //   response.end()
  // }
  // else {
  //   response.write('hello node.js')
  //   response.end()
  // }
  /*  var url= req.url
    if(url=='/'){
      res.end("index page")
    }else if(url=='/login'){
      res.end('login page')
    }else if(url=='/register'){
      res.end('register page')
    }else{
      res.end('abc')
    }*/
  var fs=require('fs')
  var url = request.url
  if (url == '/products') {
    var products = [{name: '苹果', price: 5}, {name: '香蕉', price: 3}, {name: '梨', price: 4}]
    //response.end()响应内容只能是二进制数据或者字符串（数字，对象，数组，布尔值都不可以）
    //所以此处要用JSON.stringify来转换json数组
    response.end(JSON.stringify(products))
  }else if(url==='/dir'){
    fs.readdir('../data',function (error,files) {
      response.end(JSON.stringify(files))
    })
  }
})

server.listen(8080, function name(params) {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:8080/ 来进行访问')
})