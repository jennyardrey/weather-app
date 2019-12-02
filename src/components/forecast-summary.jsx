import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary.scss';

class ForecastSummary extends React.Component {
	render() {
		return (
			<div className="summary">
				<span className='date'>{moment(this.props.date).format('ddd Do MMM')}</span>
				<span className='maxTemp'>Max temp: {this.props.temperature.max}</span>
				<span className='desc'>{this.props.description}</span>
				<span className='icon'><WeatherIcon name="owm" iconId={this.props.icon} flip="horizontal" rotate="90" /></span>
				<span className='details'><button onClick={() => this.props.onSelect(this.props.date)}>More details...</button></span>
			</div>
		)
	}
};

ForecastSummary.propTypes = {
	date: PropTypes.number.isRequired,
	temp: PropTypes.number.isRequired,
	desc: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	details: PropTypes.func,
};

export default ForecastSummary;
