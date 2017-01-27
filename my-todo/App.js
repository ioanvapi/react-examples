import React, {Component} from 'react';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: props.init.todos
    }

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
          list={this.state.todos}
          onDelete={this.deleteTodo}
          onModify={this.changeTodo}/>
        <TodoAdd
          onAdd={this.addTodo}/>
      </div>
    )
  }

  changeTodo(newTodo, index) {
    const todos = this.state.todos.map(function(todo, idx) {
      if (index === idx) {
        return newTodo;
      } else {
        return todo;
      }
    });

    this.setState({ todos })
  }

  deleteTodo(index) {
    const todos = this.state.todos.filter(function(todo, idx) {
      return (index !== idx);
    });

    this.setState({ todos })
  }

  addTodo(newTodo) {
    let {todos} = this.state;
    todos.push(newTodo);

    this.setState({
      todos
    });
  }
}
