import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.scss';

const ForecastSummaries = props => {
	// console.log(props);
	return (
		<div className="forecast-summeries">
			{
				props.forecasts.map(forecast => (
					<ForecastSummary
						key={forecast.date}
						date={forecast.date}
						description={forecast.description}
						icon={forecast.icon}
						temperature={forecast.icon}
						onSelect={props.onForecastSelect}
					/>
				))
			}
		</div>
	)
}
/* ForecastSummaries.PropTypes = {
	key: PropTypes.number.isRequired,
	date: PropTypes.number.isRequired,
	temp: PropTypes.number.isRequired,
	desc: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	details: PropTypes.func,
} */
export default ForecastSummaries;