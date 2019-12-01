import React from 'react';
import moment from 'moment';
import '../styles/detailed-forecast.scss';

const DetailedForecast = props => {
	return <div className="detailed-forecast">
		<span className='detailedDate'>{moment(props.forecast.date).format('ddd Do MMM')}</span>
		<span className='maxTemp'>Max temp:{props.forecast.temperature.max}</span>
		<span className='minTemp'>Min temp:{props.forecast.temperature.min}</span>
		<span className='windSpeed'>Wind Speed:{props.forecast.wind.speed}</span>
		<span className='windDirection'>Wind Direction:{props.forecast.wind.direction}</span>
		<span className='humidity'>Humidity:{props.forecast.humidity}</span>
	</div>;
};



export default DetailedForecast