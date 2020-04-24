import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  rendorSquare(index) {
    return (
      <Square
        squareBtnValue={this.props.squareBtnValue[index]}
        squareBtn={(e) => {
          this.props.boardProps_onClick(index);
        }}
      />
    );
  }

  render() {
    return (
      <div>
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
        <h1>{this.props.status}</h1>
        <div>{this.props.moves}</div>
      </div>
    );
  }
}
