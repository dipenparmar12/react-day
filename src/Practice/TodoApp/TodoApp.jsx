import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleEnterPress(e) {
    if (e.keyCode === 13) {
      let items = this.state.items;
      items.push({ text: e.target.value, completed: false });
      this.setState({ items });
      e.target.value = null;
    }
  }

  render() {
    const items = this.state.items.map((todo, i) =>
      todo ? <TodoItem item={todo} key={i} /> : null
    );

    return (
      <div className="todo-list">
        <h2>My TodoApp</h2>
        <TodoInput handleEnterPress={this.handleEnterPress} />
        {items}
      </div>
    );
  }
}
