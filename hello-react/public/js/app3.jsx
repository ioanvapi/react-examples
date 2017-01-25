
var Greeter = React.createClass({  
  getInitialState: function() {
    return {
      name: 'Gigi',
      message: 'Ala bala portocala',
    };
  },
  
  messageUpdated: function(name) {    
    this.setState({
      name: name
    });    
  },
  
  render: function() {    
    var name = this.state.name;
    var message = this.state.message;
    
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewMessage={this.messageUpdated}/>
      </div>
    );
  }
});


var GreeterMessage = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'Default_Name',
      message: 'This is the default message',
    }  
  },
  
  render: function() {    
    var name = this.props.name;
    var message = this.props.message;
    
    return (
      <div>
        <h1>Hello {name}!!!</h1>
        <p>{message}</p>
      </div>  
    );
  },

});


var GreeterForm = React.createClass({

  onButtonClick: function(e) {
    e.preventDefault();
    
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewMessage(name);      
    }
  },
  
  render: function() {
    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>  
    );
  }

});



ReactDOM.render(
   <Greeter/> ,
  document.getElementById('app')
);