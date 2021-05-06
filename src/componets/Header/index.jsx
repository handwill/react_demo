import React from "react";
import "./index.scss";

export default class Header extends React.Component {
  add = (event) => {
    const { keyCode, target } = event;
    console.log(event, keyCode, target.value);
    if (keyCode != 13) return;
    this.props.addTodo({
      id: +new Date(),
      name: target.value,
    });
  };
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.add} />
      </div>
    );
  }
}
