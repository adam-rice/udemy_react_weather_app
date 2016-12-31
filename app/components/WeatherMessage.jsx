/*jshint esversion: 6 */
var React = require('react');

var WeatherMessage = React.createClass( {
  render: function () {
    var {location, temp} = this.props;
    return (
      <h3>{location} {temp}</h3>
    );
  }
});

module.exports = WeatherMessage;
