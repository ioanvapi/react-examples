
var Greeter = React.createClass({
  
  //provide default values for component properties - built-in react
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is from my component'
    };
  },
  
  //it manages the state of the component - built-in react
  getInitialState: function() {
    return {
      name: this.props.name
    }  
  },
  
  //custom function
  onButtonClick: function(e) {
    e.preventDefault();
    
    var name = this.refs.name.value;
    this.refs.name.value = '';
    
    if (typeof name=== 'string' && name.length > 0) {
      this.setState({
        name: name  
      });  
    }    
  },
  
  
  //function invoked when rendering the component - built-in react
  render: function() {    
//    var name = this.props.name;
    var name = this.state.name;
    var message = this.props.message;
    
    return (
      <div>        
        <h1>Lorem Ipsum {name}!!!</h1>  
        <p>{message + '!!!'}</p>
        
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>
    );
  }
  
});


var name = 'Zizi';

ReactDOM.render(
  <Greeter name={name} message="Awsome message below"/>,
  document.getElementById('app')
);