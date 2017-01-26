var React = require('react');
require('./css/addItem.css');

var AddItem = React.createClass({
  render: function() {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" ref="newItem" placeholder="Write item here" required/>
        <input type="submit" value="Add Item"/>
      </form>

    );
  },

  //custom functions
  handleSubmit: function(e) {
    e.preventDefault();
    var newItem = this.refs.newItem.value;
    if (newItem.length > 0) {
      this.refs.newItem.value = '';
      this.props.onAddItem(newItem);
    }
  }
});

module.exports = AddItem;
