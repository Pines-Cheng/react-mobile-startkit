工程目录结构如下：

```
├── bin	// webpack配置文件，服务器启动脚本，批处理脚本等。
├── config	// 开发环境和生产环境的配置文件 
├── dist	// 打包后的文件
│   ├── css
│   ├── img
│   └── js
├── mock	// 本地mock数据，方便并行开发
├── node_modules   // 外部的依赖包
├── src	// 所有业务相关的代码和文件
│   ├── components	// 公共业务组件
│   ├── css	// 公共样式
│   ├── data	// 静态数据，如地区选择等
│   ├── font	// 字体文件（暂时未确定使用iconfont还是svg，个人倾向svg）
│   ├── images  // 图片
│   ├── page  // 页面代码
│   │   ├── customer  // 客户
│   │   │   ├── add
│   │   │   ├── detail
│   │   │   ├── edit
│   │   │   └── fallback
│   │   ├── help  // 帮助
│   │   ├── home  // 首页
│   │   ├── message  // 消息
│   │   │   ├── business
│   │   │   ├── list
│   │   │   ├── system
│   │   │   └── upgrade
│   │   ├── notice  // 通知
│   │   │   ├── company 
│   │   │   └── policy
│   │   ├── order  // 订单
│   │   │   ├── detail
│   │   │   ├── list
│   │   │   ├── log
│   │   │   ├── product_list
│   │   │   └── remark
│   │   ├── product   // 商品
│   │   │   ├── add
│   │   │   ├── detail
│   │   │   ├── edit
│   │   │   └── list
│   │   ├── setting   // 设置
│   │   │   ├── bank
│   │   │   └── company
│   │   ├── user // 用户
│   │   │   ├── account
│   │   │   └── switch
│   │   │
│   │   └── App.js  //页面的入口文件
│   │   
│   ├── polyfill   // 补丁代码
│   ├── service   // 后台请求
│   ├── utils  // 工具函数
│   ├── index.hbs  // 编译成index.html  
│   ├── index.js   // 入口js
│   └── router.js   //路由配置
│     
└── test  // 测试用例
```
