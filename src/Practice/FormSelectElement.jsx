import React, { Component } from 'react';

export default class FormSelectElement extends Component {
  constructor(props) {
    super(props);
    this.state = { selectInput: 'chess' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ selectInput: event.target.value });
  }
  handleSubmit(event) {
    alert('Your favorite hobby is: ' + this.state.selectInput);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite hobby:
          <select
            value={[this.state.selectInput, 'Shoping', 'PhotoGraphy']}
            onChange={this.handleChange}
            multiple={true}
          >
            <option value="Drawing">Drawing</option>
            <option value="Hiking">Hiking</option>
            <option value="Dance">Dance</option>
            <option value="PhotoGraphy">PhotoGraphy</option>
            <option value="YouTuber">YouTuber</option>
            <option value="Shoping">Shoping</option>
            <option value="Camping">Camping</option>
            <option value="Cooking">Cooking</option>
            <option value="Juggling">Juggling</option>
            <option value="swimming">swimming</option>
            <option value="scubaDiving">scubaDiving</option>
            <option value="Tracking">Tracking</option>
            <option value="VideoGames">VideoGames</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
