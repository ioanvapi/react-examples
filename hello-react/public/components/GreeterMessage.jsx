var React = require('react');

var GreeterMessage = React.createClass({  
  render: function() {

    var style = {
      border: '2px solid red', 
      borderRadius: '5px', 
      padding: '10px',    
    };

    var name = this.props.name;
    var msg = this.props.message;

    return (
      <div style={style}>
        <h1>Hello {name}!</h1> 
        <p>{msg}</p> 
      </div>
    );
  }

});


module.exports = GreeterMessage;
