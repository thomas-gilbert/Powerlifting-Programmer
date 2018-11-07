import 'react-native';
import React from 'react';
import Day from '../Day';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Day />).toJSON();

  expect(tree).toMatchSnapshot();
});
