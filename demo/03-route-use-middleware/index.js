/**
 * 原生koa实现路由
 * package.json 修改
 * "start": "nodemon demo/route-use-middleware/index.js"
 */

const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');

const app = new Koa();

// 子路由1
const homeRouter = new Router();
homeRouter.get('/', async (ctx) => {
  const html = `
    <ul>
      <li><a href="/page/hello">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `;
  ctx.body = html;
});

// 子路由2
const pageRouter = new Router();
pageRouter
  .get('/404', async (ctx) => {
    ctx.body = '404 page';
  })
  .get('/hello', async (ctx) => {
    ctx.body = 'Hello page';
  });

// 注册子路由
const router = new Router();
router
  .use('/', homeRouter.routes(), homeRouter.allowedMethods())
  .use('/page', pageRouter.routes(), pageRouter.allowedMethods());

// 注册路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);