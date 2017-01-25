var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Vasile',
      message: 'This is the default message',
    };
  },
  
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message,
    };
  },
  
  handleNewData: function(newState) {  
    this.setState(newState);
    
  },
  
  render: function() {    
    var name = this.state.name;
    var message = this.state.message;
    
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm dataHandler={this.handleNewData}/>
      </div>  
    );
  }
});



var GreeterMessage = React.createClass({
  render: function() {    
    var name = this.props.name;
    var message = this.props.message;
    
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>  
    );
  }
});



var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    
    var newState = {};
    if (name.length > 0) {
      this.refs.name.value = '';
      newState.name = name;
    }
    
    if (message.length > 0) {
      this.refs.message.value = '';
      newState.message = message;
    }
      
    this.props.dataHandler(newState);
  },
  
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter name"/><br/>
        <textarea ref="message" placeholder="Enter message"></textarea><br/>
        <button>Submit</button>
      </form>  
    );
  }
});



ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);