import '../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './app';
import Greet from './greetings';

/*
try these:
localhost:8080
localhost:8080/default
localhost:8080/ana
localhost:8080/gigi
*/

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="default" component={Greet} />
      <Route path="gigi" component={() => <Greet name='Gigi'/>}/>
      <Route path="ana" component={() => <Greet name='Ana'/>}/>
    </Route>
  </Router>,
  document.getElementById('root')
);