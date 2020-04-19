import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rendorSquare(index) {
    return (
      <Square
        myValue={this.props.squares[index]}
        BtnClick={(e) => {
          this.props.onClick(index);
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
      </div>
    );
  }
}
