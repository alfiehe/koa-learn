const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const STATIC_PATH = './static';

app.use(static(
  path.join(__dirname, STATIC_PATH)
));

// app.use(async (ctx) => {
//   ctx.body = 'hello world';
// });

app.listen(3000);