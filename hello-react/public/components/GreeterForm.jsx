var React = require('react');


var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function() {
    var style = {
      border: '2px solid blue', 
      borderRadius: '5px', 
      padding: '10px',
      marginTop: '10px',      
    };

    return (
      <div style={style}>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form> 
      </div>
    );
  }
});


module.exports = GreeterForm;