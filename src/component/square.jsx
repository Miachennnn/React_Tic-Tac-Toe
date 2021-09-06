import React from "react";

export default class Square extends React.Component {
  render() {
    return (
      <button className={this.props.class} onClick={this.props.onClick}>
        {this.props.val}
      </button>
    );
  }
}
