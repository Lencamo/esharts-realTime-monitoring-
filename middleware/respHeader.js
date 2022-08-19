// 二、设置响应头的中间件
module.exports = async (ctx, next) => {
  ctx.set('Content-Type', 'application/json; charset=utf-8')

  // 跨域问题解决方案：CORS🚩头
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')

  // 响应
  // ctx.body = '{ok: 1}'
  await next()
}
