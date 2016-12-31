/*jshint esversion: 6 */
const React = require('react');
const ReactDOM = require('react-dom');
const {Router, Route, IndexRoute, hashHistory} = require('react-router');
require('Styles');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="About" component={About}/>
      <Route path="Examples" component={Examples}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
