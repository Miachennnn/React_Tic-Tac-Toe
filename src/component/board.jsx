import React from "react";
import Square from "./square";

export default class Board extends React.Component {
  renderSquare(i) {
    const haveData = this.props.squares.indexOf(i); //找某個值在陣列裡面的位置
    return (
      <Square
        class={this.props.winLine.indexOf(i) === -1 ? "square" : "square win"}
        val={haveData === -1 ? "" : haveData % 2 === 0 ? "X" : "O"}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
