import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  increment = () => {};
  decrement = () => {};
  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={this.decrement}>-</button>&nbsp;
        <span>{count}</span>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
