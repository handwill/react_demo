import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: false },
    ],
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <List todos={todos} />
      </div>
    );
  }
}
