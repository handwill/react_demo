import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.input3 = React.createRef();
  }
  showData1 = () => {
    console.log(this.refs.input1);
    const { value } = this.refs.input1;
    console.log(value);
  };

  showData2 = () => {
    console.log(this.input2);
    const { value } = this.input2;
    console.log(value);
  };
  showData3 = () => {
    console.log(this.input3);
    const { value } = this.input3.current;
    console.log(value);
  };

  render() {
    return (
      <div>
        {/* 第一种 ref 已经废弃 */}
        <input type="text" ref="input1" />
        &nbsp;
        <button onClick={this.showData1}>点我</button>
        <br />
        {/* 第二种 回调函数形式 */}
        <input type="text" ref={(c) => (this.input2 = c)} />
        <button onClick={this.showData2}>点我</button>
        <br />
        {/* 第二种 createRef */}
        <input type="text" ref={this.input3} />
        <button onClick={this.showData3}>点我</button>
      </div>
    );
  }
}
