// 1. 引入Koa类
const Koa = require('koa')

// 2. 实例化一个Koa对象
const app = new Koa()

// 3. 注册中间件
app.use(ctx => {
  ctx.body = 'Hello koa'
})

// 4. 监听3000端口
app.listen(3000)