/*jshint esversion: 6 */
var React = require('react');

var WeatherMessage = React.createClass( {
  render: function () {
    var {location, temp} = this.props;
    return (
      <h3>It is {temp} degrees in {location}.</h3>
    );
  }
});

module.exports = WeatherMessage;
