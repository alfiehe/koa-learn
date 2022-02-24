/**
 * 原生koa实现路由
 * package.json 修改
 * "start": "nodemon demo/route-simple/index.js"
 */

const Koa = require('koa')
const fs = require('fs')
const path = require('path')

const app = new Koa()

/**
 * 用Promise封装异步读取文件方法
 * @param {string} page html文件名称 index.html
 * @return {promise}
 */
function render (page) {
  return new Promise((resolve, reject) => {
    const fileUrl = `${__dirname}/view/${page}`
    fs.readFile(fileUrl, 'binary', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

/**
 * 根据URL获取HTML内容
 * @param {string} url koa上下文的url
 * @return {string} 获取HTML文件内容
 */
async function route (url) {
  let view = '404.html'
  switch (url) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  let html = await render(view)
  return html
}

app.use(async (ctx) => {
  const url = ctx.request.url
  const html = await route(url)
  ctx.body = html
})

app.listen(3000)