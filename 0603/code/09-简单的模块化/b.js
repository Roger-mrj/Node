console.log('b start');

require('./c.js');

console.log('b end');

//通过exports定义的对象可以在调用它的模块中定义使用
exports.foo = 'hello';

exports.add=function (x,y) {
  return x + y;
}