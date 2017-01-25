var React = require('react');

// var WeatherMessage = (props) => {
var WeatherMessage = ({location, temp}) => {  
    // var location = this.props.location;
    // var temp = this.props.temp;
    // var {location, temp} = props;

    return (
      <p>It is {temp} in {location}. </p>
    );
};

module.exports = WeatherMessage;
