import React, { Component } from 'react';

function TechnologyTitle(props) {
  return <h1>React.js</h1>;
}

function GuestGreeting() {
  return <h3>Please sign Up</h3>;
}

function Greeting(props) {
  let isThere = props.myValue ? props.myValue : 'Dipen';
  return <h2>Welcome ({isThere}), You are logged in</h2>;
}

function LoginBtn(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutBtn(props) {
  return <button onClick={props.onClick}>LogOut</button>;
}

export default class LoginControl extends Component {
  // 0.
  constructor(prop) {
    super(prop);
    this.handle__LoginClick = this.handle__LoginClick.bind(this);
    this.handle__LogoutClick = this.handle__LogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handle__LoginClick() {
    console.log('Login CLicked');
    this.setState({
      isLoggedIn: true,
      username: 'I Am',
    });
  }

  handle__LogoutClick() {
    console.log('Log out Clicked....');
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let ToggleBtn = isLoggedIn ? (
      <LogoutBtn onClick={this.handle__LogoutClick} />
    ) : (
      <LoginBtn onClick={this.handle__LoginClick} />
    );

    return (
      <div>
        <TechnologyTitle />
        {ToggleBtn}
        {this.state.isLoggedIn ? <Greeting /> : <GuestGreeting />}
        <p>User logged in: {this.state.isLoggedIn ? 'True' : 'False'}</p>
      </div>
    );
  }
}
