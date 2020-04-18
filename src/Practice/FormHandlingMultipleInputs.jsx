import React, { Component } from 'react';

export default class FormHandlingMultipleInputs extends Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.name === 'isGoing' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    // this.setState((state) => ({
    //   [name]: this.state.name,
    // }));

    console.log(name, value);
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
