import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummery = props => {
	return <div>
		<span className='date'>{props.date}</span>
		<span className='temp'>{props.temperature}</span>
		<span className='desc'>{props.description}</span>
		<span className='icon'>{props.icon}</span>
	</div>;
};

export default ForecastSummery;
