
import React from "react";
import { hot } from 'react-hot-loader/root';
import Test from './JSX_Test';
class App extends React.Component {

  click = ()=>{
    console.log(" on click ");
  }

  render() {
    return (<div>
        app.js 
      <Test />
    </div>);
  }
}

export default hot(App);
