import React from 'react';
import {browserHistory} from 'react-router';

class User extends React.Component {
  render() {
    return (
      <div>
        <h2>The User Page</h2>
        <p>User ID:</p>
        <button
          className="btn btn-primary"
          onClick={this.buttonHandler}
        >
          Go Home
        </button>
      </div>
    )
  }

  buttonHandler() {
    browserHistory.push('/home');
  }
}

export default User;
