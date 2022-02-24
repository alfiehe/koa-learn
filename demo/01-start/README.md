# Koa Learn

## 1. Start

```
npm init
npm install koa
```

Coding

```javascript
// src/demo/01.js

// 1. Import Koa Class
const Koa = require('koa')

// 2. Instance a Koa object
const app = new Koa()

// 3. Use Middleware
app.use(ctx => {
  ctx.body = 'Hello koa'
})

// 4. Listen 3000 port
app.listen(3000)
```

Compile
```
node src/demo/01.js
```

Visit

http://localhost:3000



