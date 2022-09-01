// 项目入口文件

const koa = require('koa')
const app = new koa()

const respDuration = require('./middleware/respDuration')
const respHeader = require('./middleware/respHeader')
const respBusiness = require('./middleware/respBusiness')

// （中间件处理：注意顺序）
app.use(respDuration)
app.use(respHeader)
app.use(respBusiness)

app.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000')
})

// 监听(开启)websocket的连接情况
const serve = require('./websocket/service')
serve.listen()
