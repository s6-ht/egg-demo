// 类型实现，和goods中schema.graphql定义的模型相对应，是其具体的实现
'use strict';
module.exports = {
  Query: {
    goods(root, { infoId }, ctx) {
      console.log(ctx.connector.goods.fetchById(infoId), 11111111111111);
      return ctx.connector.goods.fetchById(infoId);
    },
  },
};
