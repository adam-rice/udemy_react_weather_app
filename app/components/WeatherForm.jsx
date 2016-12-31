/*jshint esversion: 6 */
var React = require('react');

var WeatherForm = React.createClass( {
  render: function () {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter City Name"
        />
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
