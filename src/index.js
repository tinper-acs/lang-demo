import React from "react";
import ReactDOM from "react-dom";

window.lang = require("ac-lang-cn").default;
lang.init({"zhcn":require('./pack/zh_cn.json')}, null);

const App = require('./App').default;
var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);