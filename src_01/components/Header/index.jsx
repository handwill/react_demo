import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { code, target } = event;
    console.log(code, target.value);
    if (code != 13) return;
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handleKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
