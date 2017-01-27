import React, {Component} from 'react';


class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditMode: false
    }

    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  render() {
    if (this.state.isEditMode) {
      return (
        <li>
          <form>
            <input type="text" ref="newValue" defaultValue={this.props.todo} />
            <button onClick={this.save}>save</button>
            <button onClick={this.cancel}>cancel</button>
          </form>
        </li>
      )
    } else {
      return (
        <li>
          {this.props.todo}
          <span>   </span>
          <button onClick={this.edit}>edit</button>
          <span>   </span>
          <strong onClick={this.delete.bind(this)}>x</strong>
        </li>
      )
    }
  }

  save(e) {
    e.preventDefault();
    this.setIsEdit(false);
    this.props.onModify(this.refs.newValue.value, this.props.index);
  }

  cancel(e) {
    e.preventDefault();
    this.setIsEdit(false);
  }

  edit() {
    this.setIsEdit(true);
  }

  delete() {
    this.props.onDelete(this.props.index);
  }

  setIsEdit(b) {
    this.setState({isEditMode: b});
  }

}

export default TodoListItem;
