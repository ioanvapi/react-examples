var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
var {Router, Route, browserHistory, IndexRoute, Link} = require('react-router');

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');


var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={TodoComponent}>
        </Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
});


var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat some cheese', 'take a break', 'buy flowers', 'go play some games']
    };
  },

  render: function() {
    var todos = this.state.todos;

    todos = todos.map(function(item, index) {
      return (
        <TodoItem item={item} key={index} index={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <Link to="/about">About</Link>
        <p>Todo list fo me</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAddItem={this.onAddItem}/>
      </div>
    );
  },

//Custom functions

  onDelete: function(indexItem) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return indexItem !== index;
    });

    this.setState({
      todos: updatedTodos
    });
  },

  onAddItem: function(newItem) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(newItem);

    this.setState({
      todos: updatedTodos
    });
  }
});


ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));
