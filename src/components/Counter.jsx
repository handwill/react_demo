import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  increment = () => {
    // this.props.dispatch({ type: "INCREMENT" });
    this.props.increment();
  };
  decrement = () => {
    // this.props.dispatch({ type: "DECREMENT" });
    this.props.decrement();
  };
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

const mapDispatchToProps = {
  increment: () => {
    return { type: "INCREMENT" };
  },
  decrement: () => {
    return { type: "DECREMENT" };
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
