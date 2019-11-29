import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summeries';
import '../styles/app.scss';
import DetailedForecast from './detailed-forecast';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedDate: this.props.forecasts[0].date,
		};
	}

	render() {
		const selectedForecast = this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate);
		return (
			<div>
				<LocationDetails city={this.props.location.city} country={this.props.location.country} />
				<ForecastSummaries forecasts={this.props.forecasts} />
				<DetailedForecast forecasts={selectedForecast} />
			</div>
		);
	}
}

App.propTypes = {
	location: PropTypes.shape({
		city: PropTypes.string,
		country: PropTypes.string,
	}).isRequired,
	forecasts: PropTypes.array.isRequired,
};

export default App;
