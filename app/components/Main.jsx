/*jshint esversion: 6 */
const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
  return (
    <div>
      <Navigation/>
      {props.children}
    </div>
  );
}

module.exports = Main;
