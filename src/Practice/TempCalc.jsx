import React, { Component } from 'react';

const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, converter) {
  const userInput = parseFloat(temperature);
  if (isNaN(userInput)) return;
  const output = converter(userInput);
  return (Math.round(output * 1000) / 1000).toString();
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input
            value={temperature}
            onChange={this.handleChange}
            type="number"
          />
        </fieldset>
        <br />
      </div>
    );
  }
}

export default class TempCalc extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '', scale: 'c' };

    this.handleCelesiusChange = this.handleCelesiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelesiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }
  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelesiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}
