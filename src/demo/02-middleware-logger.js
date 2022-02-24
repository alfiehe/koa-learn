const Koa = require('koa')

const app = new Koa()

const logger = require('../middleware/logger')
app.use(logger())

app.use(ctx => {
  ctx.body = 'Hello koa'
})

app.listen(3000)