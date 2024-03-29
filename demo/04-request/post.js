/**
 * nodemon demo/request/post.js
 */

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时返回表单页面
    const html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，解析POST表单里的数据，并显示出来
    const postData = await parsePostData(ctx);
    ctx.body = postData;
  } else {
    // 其他请求显示404
    ctx.body = `<h1>404！！！ o(╯□╰)o</h1>`;
  }

});

// 解析上下文里node原生请求的POST参数
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      // 当node后台收到post请求时，会以buffer的形式将数据缓存。
      // ctx.req.addListener('data', ...) 监听这个buffer。
      ctx.req.addListener('data', data => {
        // 普通的字符串，可以直接通过字符串拼接来获取
        postData += data;
      });
      ctx.req.addListener('end', () => {
        const parseData = parseQueryStr(postData);
        resolve(parseData);
      })
    } catch (err) {
      reject(err);
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr (queryStr) {
  console.log('queryStr', queryStr);
  let queryData = {};
  let queryStrList = queryStr.split('&');
  // console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

app.listen(3000);