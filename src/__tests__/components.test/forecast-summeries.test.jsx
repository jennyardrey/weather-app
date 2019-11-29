import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummery from '../../components/forecast-summery';
import ForecastSummeries from '../../components/forecast-summeries';


const forecasts = [
	{
		date: 123,
		description: 'date1',
		icon: 'icon1',
		temperature: {
			max: 999,
		},
	},
	{
		date: 456,
		description: 'date2',
		icon: 'icon2',
		temperature: {
			max: 777,
		},
	},
];

it('render the correct amount of forecastSummery componants', () => {
	const wrapper = Enzyme.shallow(<ForecastSummeries forecast={forecasts} />);
	expect(wrapper.find(ForecastSummery).length).toEqual(2);
});

it('renders the correct values from each forecastin to each forecast summery', () => {
	const wrapper = Enzyme.shallow(<ForecastSummeries forecast={forecasts} />);

	wrapper.find(ForecastSummery).forEach((node, index) => {
		expect(node.prop('date')).toEqual(forecasts[index].date);
		expect(node.prop('description')).toEqual(forecasts[index].description);
		expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
		expect(node.prop('icon')).toEqual(forecasts[index].icon);

	});
});

