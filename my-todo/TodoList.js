import React, {Component} from 'react';

import TodoListItem from './TodoListItem';

export default class TodoList extends Component {
  render() {
    const todos = this.props.list.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          todo={todo}
          index={index}
          onDelete={this.props.onDelete}
          onModify={this.props.onModify}/>
      )
    });

    return (
      <ul>
        {todos}
      </ul>
    )
  }

}
