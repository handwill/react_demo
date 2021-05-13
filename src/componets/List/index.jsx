import React from "react";
import "./index.scss";

export default class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  onChange = (event) => {
    debugger;
    console.log(this.check.value);
  };
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                ref={(c) => (this.check = c)}
                checked={item.isComplete}
                onChange={this.onChange}
              />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
