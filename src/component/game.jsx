import React from "react";
import Board from "./board";

export default class Game extends React.Component {
  state = {
    squares: [],
    isNext: true,
    step: 0,
    win: [],
  };
  handleClick(i) {
    if (this.state.squares.indexOf(i) !== -1 || this.state.win.length !== 0)
      return;
    const newSquares = this.state.squares.slice();
    newSquares.push(i);
    this.setState({
      squares: newSquares,
      isNext: !this.state.isNext,
    });
    this.winnerCheck(newSquares);
  }
  //檢查遊戲有無一方勝出
  winnerCheck(squares) {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const temp = Array(9).fill(null);
    squares.map((item, index) => {
      return (temp[item] = index % 2 === 0 ? "X" : "O");
    });
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (temp[a] && temp[a] === temp[b] && temp[a] === temp[c]) {
        this.setState({ win: [a, b, c] });
        return temp[a];
      }
    }
    return null;
  }
  jumpTo(i) {
    const newSquares = this.state.squares.slice(0, i);
    this.setState({
      squares: newSquares,
      isNext: newSquares.length % 2 === 0 ? true : false,
      win: [],
    });
  }
  render() {
    const status = "Next player: " + (this.state.isNext ? "X" : "O");
    const stepButton = this.state.squares.map((item, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>
            Go to {index === 0 ? "game start" : "move #" + index}
          </button>
        </li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board
            winLine={this.state.win}
            squares={this.state.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{stepButton}</ol>
        </div>
      </div>
    );
  }
}
