import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summeries';
import '../styles/app.scss';
import DetailedForecast from './detailed-forecast';
import Axios from 'axios';
import SearchForm from './search-form';


class App extends React.Component {
	constructor(props) {
		super(props);


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

	getCity = (e, city) => {
		// a.preventDefault();

		Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
			this.setState({
				location: {
					city: response.data.location.city,
					country: response.data.location.country
				},
				forecasts: response.data.forecasts,
			})
		})

	}


	render() {
		const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);

		return (
			<div>
				<LocationDetails city={this.state.location.city} country={this.state.location.country} />
				<SearchForm searchCity={this.getCity} />
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
