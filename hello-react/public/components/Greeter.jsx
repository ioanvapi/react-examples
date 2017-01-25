var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');


var Greeter = React.createClass({

  getDefaultProps: function() {
    return {      
      name: 'React',
      message: 'This is a fucking message'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewName: function(name) {        
    this.setState({
      name: name  
    });    
  },

  render: function() {
    var name = this.state.name;
    var msg = this.state.message;

    var style = {
      border: '2px solid green', 
      borderRadius: '5px', 
      padding: '10px',
      width: '350px',
    };

    return (
      <div style={style}>                 
        <GreeterMessage name={name} message={msg}/>        
        <GreeterForm onNewName={this.handleNewName}/> 
      </div>
    );
  }
});

module.exports = Greeter;