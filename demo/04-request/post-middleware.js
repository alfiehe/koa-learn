/**
 * 对于POST请求的处理
 * koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
 * nodemon demo/request/post-middleware.js
 */

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx) => {
  
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时返回表单页面
    const html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>age</p>
        <input type="number" name="age" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    const postData = ctx.request.body;
    ctx.body = postData;
  } else {
    // 其他请求显示404
    ctx.body = `<h1>404！！！ o(╯□╰)o</h1>`;
  }

});


app.listen(3000);