// 连接数据服务
// 引入dataloader，是由facebook推出，能大幅降低数据库的访问频次，经常在Graphql场景中使用
'use strict';
// const DataLoader = require('dataloader')
class GoodsConnector {
  constructor(ctx) {
    this.ctx = ctx;
    // this.loader = new DataLoader((id) => this.fetch(id))
  }
  fetch(id) {
    const goods = this.ctx.service.goods;
    const goodsInfo = goods.getInfoById(id);
    return goodsInfo;
  }
  addGood(params) {
    const goods = this.ctx.service.goods;
    const result = goods.addGood(params);
    console.log(result, 111111111111)
    return result;
  }
  fetchById(id) {
    return this.fetch(id);
  }
}
module.exports = GoodsConnector;
