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
