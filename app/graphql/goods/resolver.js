// 类型实现，和goods中schema.graphql定义的模型相对应，是其具体的实现
'use strict';
module.exports = {
  Query: {
    goods(root, { infoId }, ctx) {
      return ctx.connector.goods.fetchById(infoId);
    },
  },
  Mutation: {
    addGoods(root, params, ctx) {
      console.log(params);
      return ctx.connector.goods.addGood(params);
    },
  },
};
