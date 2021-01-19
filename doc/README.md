# transform-lang 

是一款 `bable` 的插件工具,帮助项目快速提取中文，并生成json文件,已有中文不再生成新的编号。

根据当前的代码，提取代码中的中文，并且把中文替换成指定api，用于国际化在前端的代码处理，开发中，开发者不用关心多语，并且中文相同的值，不会重复生成key、只需要在打包前配置plugin插件即可。

>目前仅支持React

## 使用方法



安装
```js
npm i babel-plugin-transform-lang-cli --save-dev

```
配置.babelrc

``` 
"plugins": [
    "babel-plugin-transform-lang-cli"
]

```

设置参数

``` 
"plugins": [
    ["babel-plugin-transform-lang-cli",{
        groupCode:'YS_FED_FW',
        writeFile:'zh_cn.json',
        readFile:'zh_ch.json',
        replace:"window.lang.template"
    }]
]

```

## 实现原理

    input string -> @babel/parser parser -> AST -> transformer[s] -> AST -> @babel/generator -> output string


ast分析图解
![bable-type.png](https://i.loli.net/2021/01/19/XPTcNWJSv2hskf7.png)
 
ast分析图解对照详解
![lexical.png](https://i.loli.net/2021/01/19/u8JbKiMsAxvlo6P.png)

示例分析图
![lexical-2.png](https://i.loli.net/2021/01/19/Q9CPWMZV5poIGTi.png)

## API

参数

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|groupCode|指定生成编码的前缀(参见下面的生成基本规范) |String| YS_FED_FW |
|writeFile|提取代码中，中文的json文件，指定文件(路径)，默认当前目录 |String|zh_cn.json|
|readFile|希望保留那些key,提供标准json |String|zh_cn.json|
|replace|需要替换的api 是什么。|Function|window.lang.template('xx')|
#### groupCode 规范

```js
groupCode 定义

# 产品线(ys,ncc,diwork...all代表所有)
productline=YS
# 领域(财务云，税务云，营销云，all代表所有)
domain=FED
# 项目标识（一般以代码工程来区分，按构建、打包和部署来做隔离维度）
project=FW
# 使用者组，主要决定打包范围和数据版本范围的参数，不使用项目是因为多个项目可能属于一个组


```

#### readFile 
> 如果指定的readFile文件有内容，则会根据当前文件的内容，进行value的匹配，如果有相同的value，则续用以前的key,避免产生重复的key。

```json
{
    "YS_FED_FW_20210114210174_1610631906":"张三"
}

```
 
#### 文件转换示例 

```js

import React, {Component} from 'react';
import { Button } from 'tinper-bee';
class Temp extends Component {

  constructor(props) {
    super(props);
  }

  click = ()=>{
    console.log(" on click ");
  }


  render() {
    let name1 = '李四',name2 = '张三',ast = 'AST 的世界 ';
    let con = (<div>
       <div>{`我是一个let 的 element 结构，${name2}/nihoa/你好`}</div>
    </div>)
    let  cccc = `${name2}/treecard漂亮的`;
    return (
      <div className="temp-main"> 

        <h2>我是babel-plugin-transform-lang-cli 的React的测试类 </h2>

        <span href={`href/${ast}/ast/测试`} >{`href/${ast}/ast/测试`}</span> <br/><br/>
 
        <div>{`你好,${name1},欢迎进入${ast} !!!`}</div> <br/><br/>

        {con} <br/><br/>
 
        <Button colors="primary"> {`href/${ast}/ast/测试`} </Button>
      
      </div>
    );
  }
}

export default Temp;


```

转换后json

```js
{
  "YS_FED_FW_20210119150121_1611040899": "李四",
  "YS_FED_FW_20210119150122_1611040899": "<%=aaaa%>/nihoa/你好",
  "YS_FED_FW_20210119150183_1611040944": "我是ddd变量",
  "YS_FED_FW_20210119150104_1611041035": "张三",
  "YS_FED_FW_20210119150180_1611041534": "你好,<%=aaaa%>,欢迎进入<%=cccc%> !!!",
  "YS_FED_FW_20210119150148_1611041593": "AST 的世界 "
}

```
>词条中的<%=aaaa%>表示变量,利用三方解析引擎,可以恢复成值。参考[ac-lang-cn](https://www.npmjs.com/package/ac-lang-cn)

## 规划
  目前仅支持React，后续考虑支持vue
