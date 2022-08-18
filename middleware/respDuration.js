// 一、计算服务器总耗时的中间件
module.exports = async (ctx, next) => {
  const startTime = Date.now()
  await next()

  // 结束后操作
  const endTime = Date.now()

  // 设置响应头
  const duration = endTime - startTime
  ctx.set('X-Response-Time', duration + 'ms')
}
