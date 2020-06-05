console.log('a start');
//这里直接调用b.js模块（属于自定义模块，需要写全路径，可以不加扩展名）
var b=require('./b.js');

console.log('a end')

console.log(b.foo);
console.log(b.add(123, 23));