import React, { Component } from 'react';

export default class SmallMethods extends Component {
  render() {
    return (
      <div>
        {/* ------------------- */}
        {/* ------------------- */}
        <h4>1. List Numbers</h4>
        <ListNumbers />
        <ListNumbers numbers={[10, 20, 30]} />
        <hr />

        {/* ------------------- */}
        {/* ------------------- */}
        <h4>2. List Numbers</h4>
      </div>
    );
  }
}

function ListNumbers(props) {
  let numbers = props.numbers ? props.numbers : [1, 2, 3, 4, 5];
  let listNumbers = numbers.map((number) => (
    <span key={number.toString()}> {number},</span>
  ));

  return <ul>{listNumbers}</ul>;
}
