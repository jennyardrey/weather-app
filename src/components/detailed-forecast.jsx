import React from 'react';
import moment from 'moment';

const DetailedForecast = props => {
	return <div>
		<span className='detailedDate'>{moment(props.forecast.date).format('ddd Do MMM')}</span>
		<span className='maxTemp'>{props.forecast.temperature.max}</span>
		<span className='minTemp'>{props.forecast.temperature.min}</span>
		<span className='windSpeed'>{props.forecast.wind.speed}</span>
		<span className='windDirection'>{props.forecast.wind.direction}</span>
		<span className='humidity'>{props.forecast.humidity}</span>
	</div>;
};



export default DetailedForecast