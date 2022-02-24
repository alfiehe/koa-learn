const Koa = require('koa');
const path = require('path');

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static';

app.use(async (ctx) => {
  ctx.body = ctx.url;
});

app.listen(3000);