import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper blue">
        <div className="container">
          <ul className="left  invesible-top">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Game">Tic Doc</NavLink>
            </li>
            <li>
              <NavLink to="/TodoApp">TodoApp</NavLink>
            </li>
            <li>
              <NavLink to="/Todo">Todo</NavLink>
            </li>
            {/* <li>
              <NavLink to="/HelloWorld">HelloWorld</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/ClickTic">ClickTic</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/LoginControl">LoginControl</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/Toggle">Toggle</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/ConditionalRendering">ConditionalRendering</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/SmallMethods">SmallMethods</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/NameForm">NameForm</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/FormSelectElement">FormSelectElement</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/FormHandlingMultipleInputs">
                FormHandlingMultipleInputs
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/TempCalc">TempCalc</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/TicTacTokGame">TicToc My</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
