import React from 'react';
import { shallow } from 'enzyme';
import LocationDetails from '../../components/location-details';
import setupTest from '../../setupTests';

describe('location-details', () => {
	it('renders the passed city and country in a h1 tag', () => {
		//rendering component virtually
		const wrapper = shallow(<LocationDetails city="foo" country="bar" />);
		//finding specific element and text inside
		const text = wrapper.find('h1').text();
		//checking what the text is against expectations
		expect(text).toEqual('foo, bar');
	});
});
