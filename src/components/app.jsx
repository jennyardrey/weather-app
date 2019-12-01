import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import '../styles/app.scss';
import DetailedForecast from './detailed-forecast';
import Axios from 'axios';
import SearchForm from './search-form';
import Images from '../images/rain.jpg'
import Liverpool from '../images/Liverpool.jpg'


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
			background: "",
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
				},
				// background: `url(${Images})`,
			})
		})
	}

	getCity = (e, city) => {
		e.preventDefault();

		Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
			this.setState({
				location: {
					city: response.data.location.city,
					country: response.data.location.country
				},
				forecasts: response.data.forecasts,



			})
			// this.changeBackground();
		})

	}

	/* changeBackground = () => {
		this.setState({
			background: `url(https://picsum.photos/200/300)`
		})
	} */


	render() {
		const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
		const styles = {
			width: "100%",
			height: "100vh",
			backgroundImage: this.state.background,
		}
		return (
			<div style={styles} className="forecast" >
				<LocationDetails city={this.state.location.city} country={this.state.location.country} />
				<SearchForm searchCity={this.getCity} />
				<ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelector} />
				{selectedForecast && <DetailedForecast forecast={selectedForecast} />}
			</div >
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
