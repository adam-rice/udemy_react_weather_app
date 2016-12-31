/*jshint esversion: 6 */
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass( {
  getInitialState: function() {
    return {
      location: '',
      temp: ''
    }
  },
  handleSearch: function(location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      alert(errorMessage)
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
