import React from 'react';

const Greet = ({name}) => {
  return (
    <div>Hello {name ? name : 'world'} !!!</div>
  )
};

export default Greet;

