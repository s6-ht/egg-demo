/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607155448220_6836';

  // add your middleware config here
  config.middleware = [ 'graphql' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.graphql = {
    router: '/graphql',
    app: true,
    graphiql: true,
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.security = {
    csrf: {
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: ctx => {
        // if (ctx.request.url.indexOf('/graphql') !== -1) {
          return true;
        // }
        // return false;
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
