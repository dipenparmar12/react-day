import React from "react";

class HelloWorld extends React.Component {
  constructor() {
    super();
    console.log("constructor", this.props);
  }

  componentWillMount() {
    console.log("componentWillMount", this.props);
  }

  componentDidMount() {
    console.log("componentDidMount", this.props);
  }

  componentWillUnmount() {
    console.log("WillUnmount", this.props);
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    return <div>{this.props.msg} </div>;
  }
}

export default HelloWorld;
