import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summeries';
import '../styles/app.scss';
import DetailedForecast from './detailed-forecast';
import Axios from 'axios';
import { get } from 'http';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);

		this.state = {
			selectedDate: 0,
			forecasts: [],
			location: {
				city: "",
				country: "",
			},
		};

		this.handleForecastSelector = this.handleForecastSelector.bind(this);
	}

	handleForecastSelector(date) {
		this.setState({
			selectedDate: date,
		});
	}

	componentDidMount() {
		Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast`).then(response => {
			this.setState({
				forecasts: response.data.forecasts,
				location: {
					city: response.data.location.city,
					country: response.data.location.country
				}
			})
		})
	}

	render() {
		const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);

		return (
			<div>
				<LocationDetails city={this.state.location.city} country={this.state.location.country} />
				<ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelector} />
				{selectedForecast && <DetailedForecast forecast={selectedForecast} />}
			</div>
		);
	}
}

/* App.propTypes = {
	location: PropTypes.shape({
		city: PropTypes.string,
		country: PropTypes.string,
	}).isRequired,
	forecasts: PropTypes.array.isRequired,
}; */

export default App;
