import '../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import User from './components/user';
import Home from './components/home';
import App from './components/app';

class Wrapper extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="home" component={Home}/>
          <Route path="user" component={User}/>
        </Route>
      </Router>
    )
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);