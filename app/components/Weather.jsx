/*jshint esversion: 6 */
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass( {
  render: function () {
    return (
      <div id="get-weather">
        <h1>Get Weather</h1>
        <WeatherForm/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;
