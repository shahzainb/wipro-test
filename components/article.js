import React from 'react';
import { Typeahead } from 'react-typeahead';
import Geosuggest from 'react-geosuggest';

export const Article = React.createClass({
	getInitialState () {
		return {
			location: {}
		}
	},
	
	render () {

		return (
			<article className="splash">
				<h1 className="splash-head">Enter City to get its weather</h1>
				<form className="pure-form">
					<Geosuggest className="places-suggest" onSuggestSelect={this.onSuggestSelect} onBlur={this.onBlur} />
				</form>
				<p>
					<a href="#" className="pure-button pure-button-primary" onClick={this.getWeather}>Get 5 day Weather Forecast</a>
				</p>
			</article>
		);
	},

	onSuggestSelect (suggest) {
		
		const { lat, lng } = suggest.location;
		
		this.setState({
			location: {lat, lon: lng}
		});
	},
	
	getWeather () {
		this.props.getWeatherData({
			location: this.state.location,
			units: 'metric'
		});
	}
});