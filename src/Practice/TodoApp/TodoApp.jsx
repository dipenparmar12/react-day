import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: 'dipen', completed: false },
        { text: 'Two', completed: true },
        { text: 'three', completed: false },
        { text: 'four', completed: false },
      ],
    };
    this.handleEnterPress = this.handleEnterPress.bind(this);
    this.markItem = this.markItem.bind(this);
  }

  handleEnterPress(e) {
    if (e.keyCode === 13) {
      let items = this.state.items;
      items.push({ text: e.target.value, completed: false });
      this.setState({ items });
      e.target.value = null;
    }
  }

  markItem(item) {
    item.completed = true;
    let items = this.state.items;
    // let changingItem = items.filter((todo, i) => todo.text === item.text);
    // let changingItem = items.find((todo) => todo.text === item.text);

    let updatedItems = items.map((todo) => {
      if (todo.text === item.text) {
        console.log('be', todo);
        todo.completed = !todo.completed;
        console.log('aft', todo);
      }
      return todo;
    });

    this.setState({
      items: [...updatedItems],
    });
  }

  render() {
    const items = this.state.items.map((todo, i) => {
      return todo ? (
        <TodoItem item={todo} markItem={this.markItem} id={i} key={i} />
      ) : null;
    });

    return (
      <div className="todo-list">
        <h2>My TodoApp</h2>
        <TodoInput handleEnterPress={this.handleEnterPress} />
        {items}
      </div>
    );
  }
}
