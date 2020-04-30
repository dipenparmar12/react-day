import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/HomePage';

import HelloWorld from './Practice/HelloWorld';
import ClickTic from './Practice/ClickTic';
import LoginControl from './Practice/LoginControl';
import Toggle from './Practice/Toggle';
import ConditionalRendering from './Practice/ConditionalRendering.jsx';
import SmallMethods from './Practice/SmallMethods.jsx';
import NameForm from './Practice/NameForm';
import FormSelectElement from './Practice/FormSelectElement';
import FormHandlingMultipleInputs from './Practice/FormHandlingMultipleInputs';
import TempCalc from './Practice/TempCalc';
import TicTacTokGame from './Practice/TicTacTok/TicTacTokGame';
import Game from './Practice/TicTacTok/Game';
import TodoApp from './Practice/TodoApp/TodoApp';
import Todo from './Practice/Todo';
import Post from './Pages/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:post_id" component={Post} />
          <Route exact path="/HelloWorld" component={HelloWorld} />
          <Route exact path="/ClickTic" component={ClickTic} />
          <Route exact path="/LoginControl" component={LoginControl} />
          <Route exact path="/Toggle" component={Toggle} />
          <Route
            exact
            path="/ConditionalRendering"
            component={ConditionalRendering}
          />
          <Route exact path="/SmallMethods" component={SmallMethods} />
          <Route exact path="/NameForm" component={NameForm} />
          <Route
            exact
            path="/FormSelectElement"
            component={FormSelectElement}
          />
          <Route
            exact
            path="/FormHandlingMultipleInputs"
            component={FormHandlingMultipleInputs}
          />
          <Route exact path="/TempCalc" component={TempCalc} />
          <Route exact path="/TicTacTokGame" component={TicTacTokGame} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/TodoApp" component={TodoApp} />
          <Route exact path="/Todo" component={Todo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
