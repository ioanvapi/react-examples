import React from 'react';

const App = (props) => {

  // children are the components nested by Router into App in index.js
  return (
    <div>
      <h2>React Router Simplest App</h2>
      {props.children}
    </div>
  )
};

export default App;

