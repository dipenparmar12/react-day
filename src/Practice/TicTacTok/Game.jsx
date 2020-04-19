import React, { Component } from 'react';
import Board from './Board';

export default class TicTacTokGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [{ squares: Array(9).fill(null) }],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    console.log(i);
    // console.log(history);
    console.log(current.squares);
    // console.log(squares);
    // console.log(this.state);

    this.setState({
      history: history.concat({ squares: squares }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    return (
      <div className="game">
        <div className="game-board">
          <Board
            onClick={(i) => {
              this.handleClick(i);
            }}
            squares={current.squares}
          />
        </div>
      </div>
    );
  }
}
