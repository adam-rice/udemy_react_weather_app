/*jshint esversion: 6 */
const React = require('react');
const { Link, IndexLink } = require('react-router');

const Navigation = (props) => {
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

module.exports = Navigation;
