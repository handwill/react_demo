import React from "react";
import "./index.scss";

export default class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    );
  }
}
