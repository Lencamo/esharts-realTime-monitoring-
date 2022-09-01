const WebSocket = require('ws')

const WebSocketServer = WebSocket.WebSocketServer

const wss = new WebSocketServer({ port: 9191 })

wss.on('connection', function connection(ws) {
  // 接收数据
  ws.on('message', function message(data) {
    console.log(data)
  })

  // 发送数据
  ws.send('hello websocket!')
})
