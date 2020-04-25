import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newItemText: null,
    };
    this.addItem = this.addItem.bind(this);
    this.handleFormInput = this.handleFormInput.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  addItem(itemText) {
    console.log('addItem: ');
    if (itemText) {
      let items = this.state.items;
      items.push({ text: itemText, completed: false });
      this.setState({
        items,
        newItemText: null,
      });
      return true;
    }
  }

  handleFormInput(e) {
    console.log('handleFormInput: ');
    if (e.name === 'newItemText') {
      if (this.addItem(e.target.value)) e.target.value = null;
      return;
    }
    this.setState({ newItemText: e.target.value });
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      if (this.addItem(e.target.value)) e.target.value = null;
    }
  }

  render() {
    const items = this.state.items.map((todo, i) =>
      todo ? <TodoItem item={todo} key={i} /> : null
    );

    return (
      <div className="todo-list">
        <h2>My TodoApp</h2>
        <TodoInput
          addItem={this.addItem}
          handleFormInput={this.handleFormInput}
          keyPress={this.keyPress}
        />
        <button
          onClick={() => {
            this.addItem(this.state.newItemText);
            this.setState({ newItemText: null });
          }}
        >
          Add
        </button>
        {items}
      </div>
    );
  }
}
