
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',
        path: '/index',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2022-03-15'),
        httpOnly: false,
        overwrite: false,
      }
    );
    ctx.body = 'cookie is ok';
  } else {
    ctx.body = 'hello world';
  }
});


app.listen(3000, () => {
  console.log(`app starting at port http://localhost:3000`);
});