/*jshint esversion: 6 */
var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass( {
  render: function () {
    return (
      <div>
        <Navigation/>
      </div>
    );
  }
});

module.exports = Main;
