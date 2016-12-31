/*jshint esversion: 6 */
var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = React.createClass( {
  render: function () {
    return (
      <div id="nav-bar">
        <IndexLink
          className="nav-btn"
          activeClassName="active"
          to="/">Get Weather
        </IndexLink>
        <Link
          className="nav-btn"
          activeClassName="active"
          to="/about">About
        </Link>
        <Link
          className="nav-btn"
          activeClassName="active"
          to="/examples">Examples
        </Link>
      </div>
    );
  }
});

module.exports = Navigation;
