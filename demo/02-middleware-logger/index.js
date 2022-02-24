const Koa = require('koa')

const app = new Koa()

const logger = require('../middleware/logger')
app.use(logger())

app.use(ctx => {
  ctx.body = 'Hello Daiboy'
})

app.listen(3000)