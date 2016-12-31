/*jshint esversion: 6 */
const React = require('react');
const moment = require('moment');

let time = moment().format('MMMM D, h:mma');

const WeatherMessage = ({ location, temp }) => {
  let simpleTemp = Math.floor(temp);
  return (
    <div>
      <h3>It is {simpleTemp}&deg; in {location}.</h3>
      <p>{time}</p>
    </div>
  );
}

module.exports = WeatherMessage;
