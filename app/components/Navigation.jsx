/*jshint esversion: 6 */
var React = require('react');
var {Link} = require('react-router');

var Navigation = React.createClass( {
  render: function () {
    return (
      <div id="nav-bar">
        <Link className="nav-btn" to="/">Get Weather</Link>
        <Link className="nav-btn" to="/about">About</Link>
        <Link className="nav-btn" to="/examples">Examples</Link>
      </div>
    );
  }
});

module.exports = Navigation;
