var React = require('react');
require('./css/todoItem.css');

var TodoItem = React.createClass({
  render: function() {
    return (
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-remove" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  //Custom functions
  handleDelete: function() {
    this.props.onDelete(this.props.index);
  }
});

module.exports = TodoItem;
