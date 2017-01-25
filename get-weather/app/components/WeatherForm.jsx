var React = require('react');

var WeatherForm = React.createClass({

    onSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" ref="location" placeholder="Enter city name"/>
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;
