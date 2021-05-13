import React, { Component } from "react";
import Header from "./componets/Header";
import List from "./componets/List";
import Footer from "./componets/Footer";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "hhh", isComplete: true },
        { id: 2, name: "jdfkas", isComplete: false },
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
        <Footer todos={todos} />
      </div>
    );
  }
}
