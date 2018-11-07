import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Day1 from '../screens/Day1';
import Day2 from '../screens/Day2';
import Day3 from '../screens/Day3';
import Day4 from '../screens/Day4';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const Day1Stack = createStackNavigator({
  Day1,
});

Day1Stack.navigationOptions = {
  tabBarLabel: 'Day 1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const Day2Stack = createStackNavigator({
  Day2,
});

Day2Stack.navigationOptions = {
  tabBarLabel: 'Day 2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const Day3Stack = createStackNavigator({
  Day3,
});

Day3Stack.navigationOptions = {
  tabBarLabel: 'Day 3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const Day4Stack = createStackNavigator({
  Day4,
});

Day4Stack.navigationOptions = {
  tabBarLabel: 'Day 4',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  Day1,
  Day2,
  Day3,
  Day4,
});
