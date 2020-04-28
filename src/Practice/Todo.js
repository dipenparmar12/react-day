import React, { Component } from 'react';

import ListItemText from '@material-ui/core/ListItemText';
import {
  ListItemIcon,
  ListItem,
  List,
  Divider,
  TextField,
} from '@material-ui/core';
import Label from '@material-ui/icons/Label';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, todoContent: 'buy some snacks' },
        { id: 2, todoContent: 'find new handsome job ' },
        { id: 3, todoContent: 'afternoon Cooking' },
        { id: 4, todoContent: 'Pay electric city biil' },
      ],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    todo.id = Math.random();
    const newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <br />
        <br />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

//// -------
//// ListOut Todos
function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <React.Fragment key={todo.id}>
        <ListItem
          button
          onClick={(e) => {
            deleteTodo(todo.id);
          }}
        >
          <ListItemIcon>
            <Label />
          </ListItemIcon>
          <ListItemText primary={todo.todoContent} />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))
  ) : (
    <ListItem>
      <ListItemText primary="You dont have any todo.." />
    </ListItem>
  );

  return <List aria-label="main mailbox folders">{todoList}</List>;
}

//// -------
//// Add New Todo Form
class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = { todoContent: '' };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      todoContent: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const todoContent = this.state.todoContent;
    if (todoContent) {
      this.props.addTodo({ todoContent });
      this.setState({ todoContent: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <TextField
          fullWidth
          id="todoText"
          label="Write Todo"
          onChange={this.handleInput}
          value={this.state.todoContent}
        />
        <br />
        {/* <Button variant="outlined" color="primary" type="submit">
          addTodo
        </Button> */}
      </form>
    );
  }
}
