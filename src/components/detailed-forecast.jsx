import React from 'react';
import moment from 'moment';
import '../styles/detailed-forecast.scss';
import PropTypes from 'prop-types';

class DetailedForecast extends React.Component {
	render() {
		return <div className="detailed-forecast">
			<span className='detailedDate'>{moment(this.props.forecast.date).format('ddd Do MMM')}</span>
			<span className='maxTemp'>Max temp: {this.props.forecast.temperature.max} degrees</span>
			<span className='minTemp'>Min temp: {this.props.forecast.temperature.min} degrees</span>
			<span className='windSpeed'>Wind Speed: {this.props.forecast.wind.speed} mph	</span>
			<span className='windDirection'>Wind Direction: {this.props.forecast.wind.direction}</span>
			<span className='humidity'>Humidity: {this.props.forecast.humidity}</span>
		</div>;
	}
};

DetailedForecast.propTypes = {
	detailedDate: PropTypes.array.isRequired,
	maxTemp: PropTypes.number.isRequired,
	minTemp: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired,
	windSpeed: PropTypes.number.isRequired,
	windDirectionx: PropTypes.number.isRequired,
};


export default DetailedForecast