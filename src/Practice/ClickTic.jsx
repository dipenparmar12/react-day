import React from 'react';

class ClickTic extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { counter: 0 };

    this.handleDescriment = this.handleDescriment.bind(this);
  }

  handleIncrement(event) {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }

  handleDescriment(event) {
    // event.preventDefault();
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div> <br />
        <button
          onClick={(event) => {
            this.handleIncrement();
          }}
        >
          Inc
        </button>
        <button onClick={this.handleDescriment}>Decr</button>
      </div>
    );
  }

  componentWillMount() {
    console.log('WillMount');
  }

  componentDidMount() {
    console.log('DidMount');
  }

  componentWillUpdate() {
    console.log('WillUpdate');
  }

  componentDidUpdate() {
    console.log('DidUpdate');
  }

  // componentDidCatch() {
  //   console.log("DidCatch");
  // }
  // componentWillReceiveProps() {
  //   console.log("WillReceiveProps");
  // }
  // componentWillUnmount() {
  //   console.log("WillUnMount");
  // }
}

export default ClickTic;

// 1 Contructor
// 2.1 componentWillMount
// 2.2 componentDidMount

// 1.0 event componentWillUpdate ( every time when update, before didMount )
// 1.1 event componentDidUpdate ( every time when update, after WillUpdate )
