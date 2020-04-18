import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handaleToggle = this.handaleToggle.bind(this);
  }

  handaleToggle(e) {
    console.log('Toggled to:', e.target);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handaleToggle} id="1">
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}
