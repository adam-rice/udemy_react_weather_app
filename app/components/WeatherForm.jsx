/*jshint esversion: 6 */
const React = require('react');

const WeatherForm = React.createClass( {
  onFormSubmit: function (e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          ref="location"
          type="text"
          placeholder="Enter City Name"
        />
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
