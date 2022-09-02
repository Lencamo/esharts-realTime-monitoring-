// 1、koa后端服务器
// （测试：node ./websocket/Demo/backend.js）
// （开发：npm start）
const koa = require('koa')
const app = new koa()

app.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000')
})

// 2、websocket使用
const WebSocket = require('ws')

const WebSocketServer = WebSocket.WebSocketServer

const wss = new WebSocketServer({ port: 9191 })

wss.on('connection', function connection(ws) {
  // 成功提示
  console.log('客户端连接成功')

  ws.on('message', async function message(data) {
    // ✨接收客户端数据
    console.log('前端发送的数据：' + data)

    // ✨发送数据
    ws.send('data from backend')
  })
})
