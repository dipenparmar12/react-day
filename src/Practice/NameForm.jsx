import React, { Component } from 'react';

function NamePrint(params) {
  return <span> My name is {params.name}</span>;
}

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputName: null };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    // console.log('name:' + e.target.value);
    this.setState({ inputName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submited: ' + this.state.inputName);
    alert('Welcome to amazing world for enjoyment, ' + this.state.inputName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your Name:
            <input type="text" onChange={this.handleNameChange} />
          </label>
          <input type="submit" value="Enter" />
        </form>
        <hr />
        <NamePrint name={this.state.inputName} />
      </div>
    );
  }
}
