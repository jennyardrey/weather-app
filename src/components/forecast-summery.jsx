import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {
	return <div>
		<span className='date'>{moment(props.date).format('ddd Do MMM')}</span>
		<span className='temp'>{props.temperature}</span>
		<span className='desc'>{props.description}</span>
		<span className='icon'><WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" /></span>
		<button onClick={() => console.log('hello')}>More details...</button>
	</div>;
};

export default ForecastSummary;
