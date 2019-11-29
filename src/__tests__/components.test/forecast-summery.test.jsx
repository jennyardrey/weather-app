import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummery from '../../components/forecast-summery';
import setupTest from '../../setupTests';


describe('forecast-summery', () => {
	it('renders the date', () => {
		const wrapper = shallow(<ForecastSummery
			date="mockDate"
			temperature="mockTemperature"
			description="mockDescription"
			icon="mockIcon" />
		);
		const text = wrapper.find('.date').text();
		console.log(text);
		expect(text).toEqual('mockDate');
	});

	it('renders the temperature', () => {
		const wrapper = shallow(<ForecastSummery
			date="mockDate"
			temperature="mockTemperature"
			description="mockDescription"
			icon="mockIcon" />
		);
		const text = wrapper.find('.temp').text();
		console.log(text);
		expect(text).toEqual('mockTemperature');
	});

	it('renders the description', () => {
		const wrapper = shallow(<ForecastSummery
			date="mockDate"
			temperature="mockTemperature"
			description="mockDescription"
			icon="mockIcon" />
		);
		const text = wrapper.find('.desc').text();
		console.log(text);
		expect(text).toEqual('mockDescription');
	});

	it('renders the icon', () => {
		const wrapper = shallow(<ForecastSummery
			date="mockDate"
			temperature="mockTemperature"
			description="mockDescription"
			icon="mockIcon" />
		);
		const text = wrapper.find('.icon').text();
		console.log(text);
		expect(text).toEqual('mockIcon');
	})
})