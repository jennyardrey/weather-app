import React from 'react';
import Enzyme from 'enzyme';
import LocationDetails from '../../src/components/location-details';

describe('location-details', () => {
  it('renders the passed city and country in a h1 tag', () => {
    const wrapper = Enzyme.shallow(<LocationDetails city="foo" country="bar" />);

    const text = wrapper.find(.city).text();

    expect(text).toEqual('foo, bar');
  });
});
