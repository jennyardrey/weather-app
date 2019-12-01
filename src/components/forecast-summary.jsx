import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';
import '../styles/forecast-summary.scss';

const ForecastSummary = props => {
	// console.log(props);
	return <div className="summary">
		<span className='date'>{moment(props.date).format('ddd Do MMM')}</span>
		<span className='maxTemp'>{props.temperature.max}</span>
		<span className='desc'>{props.description}</span>
		<span className='icon'><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span>
		<span className='details'><button onClick={() => props.onSelect(props.date)}>More details...</button></span>
	</div>;
};
/* 
ForecastSummary.PropTypes = {
	date: PropTypes.number.isRequired,
	temp: PropTypes.number.isRequired,
	desc: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	details: PropTypes.func,
}; */

export default ForecastSummary;