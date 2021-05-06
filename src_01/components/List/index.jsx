import React, { Component } from "react";
import Item from "../Item";

export default class List extends Component {
  render() {
    return (
      <div className="todo-main">
        {this.props.todos.map((todo) => {
          return <Item key={todo.id} {...todo} />;
        })}
      </div>
    );
  }
}
