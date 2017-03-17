import '../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import User from './components/user';
import Home from './components/home';
import Root from './components/root';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Home}/>
          <Route path="home" component={Home}/>
          <Route path="user" component={User}/>
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);