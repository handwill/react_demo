import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { todos } = this.props;
    return <div>总共{todos.length}</div>;
  }
}
