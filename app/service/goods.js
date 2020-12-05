'use strict';
const Service = require('egg').Service;

// 实现的http请求
// const { createAPI } = require('../util/request');
class GoodsService extends Service {
  async getInfoById(infoId) {
    const data = [
      {
        infoId: 1,
        title: '衣服',
        content: '这是一件超好看的衣服',
        special: '～～～',
        price: 1000,
        image: '',
      },
      {
        infoId: 2,
        title: '衣服2',
        content: '这是一件超好看的衣服2',
        special: '～～～',
        price: 2000,
        image: '',
      },
      {
        infoId: 3,
        title: '衣服3',
        content: '这是一件超好看的衣服3',
        special: '～～～',
        price: 3000,
        image: '',
      },
    ];
    // const result = await createAPI(this, 'example/getInfoById', 'get', { infoId });
    const result = data.find(item => item.infoId === infoId);
    return result;
  }
}
module.exports = GoodsService;
