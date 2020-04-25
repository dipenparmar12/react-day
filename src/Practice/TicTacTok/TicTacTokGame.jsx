import React, { Component } from 'react';

export default class TicTacTokGame extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.clearGameData = this.clearGameData.bind(this);

    this.state = {
      activePlayer: 'X',
      currentPlayer: null,
      gameWinner: null,
      boardBox: Array(9).fill(null),
    };
  }

  clearGameData() {
    this.setState({
      activePlayer: 'X',
      currentPlayer: null,
      gameWinner: null,
      boardBox: Array(9).fill(null),
    });
  }

  handleClick(boxIndex) {
    const updateBoardBox = this.state.boardBox;
    if (!this.state.gameWinner && updateBoardBox[boxIndex] === null) {
      updateBoardBox[boxIndex] = this.state.activePlayer === 'X' ? 'O' : 'X';

      this.setState({
        boardBox: updateBoardBox,
        activePlayer: this.state.activePlayer === 'X' ? 'O' : 'X',
      });
    }
    this.checkWinner(boxIndex);
  }

  checkWinner(boxIndex) {
    const currentBoardBox = this.state.boardBox;
    let winRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winRows.length; i++) {
      if (
        isNaN(currentBoardBox[winRows[i][0]]) &&
        currentBoardBox[winRows[i][0]] === currentBoardBox[winRows[i][1]] &&
        currentBoardBox[winRows[i][1]] === currentBoardBox[winRows[i][2]]
      ) {
        this.setState({
          gameWinner: true,
        });
        alert('Congo!, you win');
      }
    }

    console.log('------');
  }

  rendorSquare(boxIndex) {
    return (
      <button className="square" onClick={() => this.handleClick(boxIndex)}>
        {this.state.boardBox[boxIndex]}
      </button>
    );
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <div className="border-row">
            {this.rendorSquare(0)}
            {this.rendorSquare(1)}
            {this.rendorSquare(2)}
          </div>
          <div className="border-row">
            {this.rendorSquare(3)}
            {this.rendorSquare(4)}
            {this.rendorSquare(5)}
          </div>
          <div className="border-row">
            {this.rendorSquare(6)}
            {this.rendorSquare(7)}
            {this.rendorSquare(8)}
          </div>
          <h4> Player: {this.state.activePlayer === 'X' ? 'O' : 'X'} </h4>
          <div className="border-row">
            <button
              onClick={() => {
                this.clearGameData();
              }}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
