import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
  }

  handleClick() {
    this.setState((state) => {
      isToggleOn: !state.isToggleOn;
    });
  }

  render() {
    // return <button>{this.state.isToggleOn ? 'On' : 'Off'}</button>;
  }
}
