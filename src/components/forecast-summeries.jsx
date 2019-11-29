import React from 'react';
import ForecastSummery from './forecast-summery';
import '../styles/forecast-summeries.scss';

const ForecastSummeries = props => {
	console.log(props);
	return (
		<div className="forecast-summeries">
			{
				props.forecasts.map(forecast => (
					<ForecastSummery
						key={forecast.date}
						date={forecast.date}
						description={forecast.description}
						icon={forecast.icon}
						temperature={forecast.icon}
					/>
				))
			}
		</div>
	)
}
export default ForecastSummeries;