import 'react-native';
import React from 'react';
import Day1 from '../Day1';
import renderer from 'react-test-renderer';

describe('Day1', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Day1 />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
