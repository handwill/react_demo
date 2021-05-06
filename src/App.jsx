import React, { Component } from "react";
import Header from "./componets/Header";
import List from "./componets/List";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "hhh" },
        { id: 2, name: "jdfkas" },
      ],
    };
  }
  addTodo = (todo) => {
    this.setState({
      todos: this.state.todos.concat(todo),
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo}></Header>
        <List todos={todos} />
      </div>
    );
  }
}
