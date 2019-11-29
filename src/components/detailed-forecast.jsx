import React from 'react';
import moment from 'moment';

const DetailedForecast = props => {
	return <div>
		<span className='detailedDate'>{moment(props.forecasts.date).format('ddd Do MMM')}</span>
		<span className='maxTemp'>{props.forecasts.temperature.max}</span>
		<span className='minTemp'>{props.forecasts.temperature.min}</span>
		<span className='windSpeed'>{props.forecasts.wind.speed}</span>
		<span className='windDirection'>{props.forecasts.wind.direction}</span>
		<span className='humidity'>{props.humidity}</span>
	</div>;
};

export default DetailedForecast