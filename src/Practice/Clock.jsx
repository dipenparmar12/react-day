import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // this.id = setInterval(() => {
    //   () => tick();
    // }, 1000);
    this.id = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1> Ist: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
