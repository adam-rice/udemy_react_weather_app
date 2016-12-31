/*jshint esversion: 6 */
const React = require('react');

const WeatherMessage = ({ location, temp }) => {
  return (
    <h3>It is {temp} degrees in {location}.</h3>
  );
}

module.exports = WeatherMessage;
