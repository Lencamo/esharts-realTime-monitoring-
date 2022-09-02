const WebSocket = require('ws')

const path = require('path')
const readTool = require('../utils/readFile')

const WebSocketServer = WebSocket.WebSocketServer

const wss = new WebSocketServer({ port: 9191 })

module.exports.listen = () => {
  wss.on('connection', function connection(ws) {
    // 成功提示
    console.log('客户端连接成功')

    // 接收数据
    ws.on('message', async function message(data) {
      // console.log(data)
      let payload = JSON.parse(data)

      // 是否为🚩全屏和主题切换
      if (payload.action === 'getData') {
        let dataPath = path.join(
          __dirname,
          '../data/' + payload.chartName + '.json'
        )

        const ret = await readTool.getFile(dataPath)
        payload.data = ret

        // 发送chart数据🤔
        ws.send(JSON.stringify(payload))
      } else {
        // 群发（包括自己）
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: false })
          }
        })
      }
    })
  })
}
