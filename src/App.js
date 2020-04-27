import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollableTabs from './Internet/ScrollableTabs';

// import HelloWorld from './HelloWorld/HelloWorld';
// import ClickTic from './Practice/ClickTic';
// import LoginControl from './Practice/LoginControl';
// import Toggle from './Practice/Toggle';
// import ConditionalRendering from './Practice/ConditionalRendering.jsx';
// import SmallMethods from './Practice/SmallMethods.jsx';
// import NameForm from './Practice/NameForm';
// import FormSelectElement from './Practice/FormSelectElement';
// import FormHandlingMultipleInputs from './Practice/FormHandlingMultipleInputs';
// import TempCalc from './Practice/TempCalc';
// import TicTacTokGame from './Practice/TicTacTok/TicTacTokGame';
// import Game from './Practice/TicTacTok/Game';
import TodoApp from './Practice/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <h3>ReactJs</h3> */}
      {/* <HelloWorld /> */}
      {/* <ClickTic /> */}
      {/* <LoginControl /> */}
      {/* <Toggle /> */}
      {/* <ConditionalRendering /> */}
      {/* <SmallMethods /> */}
      {/* <NameForm /> */}
      {/* <FormSelectElement /> */}
      {/* <FormHandlingMultipleInputs /> */}
      {/* <TempCalc /> */}
      {/* <TicTacTokGame /> */}
      {/* <Game /> */}
      {/* <TodoApp /> */}
      {/* <Navbar /> */}

      <BrowserRouter>
        <div>
          <Route exact path="/todo" component={TodoApp} />
          <Route exact path="/practice" component={ScrollableTabs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
