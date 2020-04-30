import React, { Component } from 'react';
import Board from './Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // is someone win game or not
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    // console.log(this.state.history); // board squares() 9 steps, 9 boards
  }

  junpTo(stepNumber) {
    this.setState({
      stepNumber,
      xIsNext: stepNumber % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    //// for Retrive History with btn click
    const moves = history.map((step, i) => {
      const desc = i ? 'Go toMove #' + i : 'GoTo Starting Point';
      // console.log(step);
      return (
        <li key={i}>
          <button onClick={() => this.junpTo(i)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div>
          <div className="game-board">
            <Board
              squareBtnValue={current.squares}
              boardProps_onClick={(i) => this.handleClick(i)}
              status={status}
              moves={moves}
            />
          </div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winLines.length; i++) {
    const [a, b, c] = winLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // WinChar = X:O
    }
  }
  return null;
}
