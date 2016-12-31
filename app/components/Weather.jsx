/*jshint esversion: 6 */
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass( {
  getInitialState: function() {
    return {
      location: '',
      temp: ''
    }
  },
  handleSearch: function(location) {
    this.setState({
      location: location,
      temp: 77
    })
  },
  render: function () {
    var {location, temp} = this.state;
    return (
      <div id="get-weather">
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
