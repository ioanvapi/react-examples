import React, {Component} from 'react';


class TodoAdd extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref="newTodo" placeholder='Enter todo here' required />
        <button>Add</button>
      </form>
    )
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newTodo.value);
    this.refs.newTodo.value = '';
  }

}

export default TodoAdd;
