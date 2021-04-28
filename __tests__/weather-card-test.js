import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from '../src/components/WeatherCard';

const [onClick] = new Array(1).fill(jest.fn());

const shallowSetup = () => {
  // Sample props to pass to our shallow render
  const props = {
    id: '7ae5bfa3',
    location: 'Munich',
    date: '2021-04-20',
    temp: 40,
    humidity: 10,
    wind: 4,
    current: false,
    unit: 'celsius',
    onClick
  };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<WeatherCard {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('components', () => {
  describe('Shallow render weather card', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = shallowSetup();
      expect(enzymeWrapper.find('h1').text()).toBe(props.location);
    });
  });
});
