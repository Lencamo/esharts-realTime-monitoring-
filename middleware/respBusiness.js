// 三、读取json文件数据的中间件（业务逻辑处理）
const path = require('path')
const fs = require('fs')
const readTool = require('../utils/readFile')

module.exports = async (ctx, next) => {
  // 根据url读取对应的文件（ /api/seller ——> ../data/seller.json）
  // 1、得到数据文件的名称
  fileName = ctx.url.replace('/api', '')

  // 2、获取数据文件的位置
  dataPath = path.join(__dirname, '../data' + fileName + '.json')

  // 返回json文件数据
  try {
    // 方式1：直接
    // ctx.body = await new Promise((resolve, reject) => {
    //   fs.readFile(dataPath, 'utf8', (error, content) => {
    //     if (error) return reject(error)
    //     resolve(content)
    //   })
    // })

    // 方式2：基于promise进行封装✨
    ctx.body = await readTool.getFile(dataPath)
  } catch (error) {
    const errorMsg = {
      message: '读取文件内容失败, 文件资源不存在',
      status: 404
    }
    ctx.response.body = JSON.stringify(errorMsg)
  }

  await next()
}
