# egg-demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org



├── app
│   ├── graphql                       // graphql 代码，所有和graphql相关的代码都在这里，已经在前面做好了配置
│   │    └──goods                     // 商品详情的graphql模型
│   │         └── connector.js        // 连接数据服务
│   │         └── resolver.js         // 类型实现，和goods中schema.graphql定义的模型相对应，是其具体的实现
│   │         └── schema.graphql      // schema 定义，在这里定义商品详情数据对象
│   │    └──query                     // 所有的查询都会经过这里，这里是一个总的入口
│   │         └── schema.graphql      // 整个graphql查询的总入口
│   ├── service
│   │   └── goods.js                  // 商品详情的具体实现
│   └── router.js