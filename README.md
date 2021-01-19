# lang-demo

本示例结合 babel-plugin-transform-lang-cli(bable plugin 中文提取工具)、ac-lang-cn(运行时解析多语)，提供一个完整的示例。


## 安装

```js

npm install --save ac-lang-cn

npm install --save-dev babel-plugin-transform-lang-cli
```

## 1. 配置.babelrc,实现中文提取
查看详细配置和原理，请参考

[babel-plugin-transform-lang-cli](https://github.com/tinper-acs/lang-demo/blob/main/doc/README.md)

https://www.npmjs.com/package/babel-plugin-transform-lang-cli


```js

"plugins": [
    "babel-plugin-transform-lang-cli"
]

```
## 2.配置运行时加载

[ac-lang-cn](https://www.npmjs.com/package/ac-lang-cn) 

```js
window.lang = require("ac-lang-cn").default;

lang.init({"zhcn":require('./pack/zh_cn.json')}, null); //加载多语文件

//...do somthing ,app entry

```

## 预览效果

访问 http://ip:3005/xx?locale=zh_CN/en_US

```js

http://127.0.0.1:3005/?locale=zh_CN

```


## 启动本项目

  ```js

  npm run start

  ```