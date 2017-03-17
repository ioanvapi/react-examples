import React from 'react';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row col-xs-10 col-xs-offset-1">
          <Header/>
        </div>
        <div className="row col-xs-10 col-xs-offset-1">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
