/**
 * nodemon demo/request/get.js
 */

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  const url = ctx.url;

  // ctx.request
  const request_query = ctx.request.query;
  const request_querystring = ctx.request.querystring;

  // ctx
  const ctx_query = ctx.query;
  const ctx_querystring = ctx.querystring;

  ctx.body = {
    url,
    request_query,
    request_querystring,
    ctx_query,
    ctx_querystring,
  };
});


app.listen(3000);