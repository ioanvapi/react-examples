var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h2>About component ...</h2>
      </div>
    );
  }
});

module.exports = About;
