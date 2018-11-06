import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Day from '../components/Day';

export default class Day1 extends React.Component {
  static navigationOptions = {
    title: 'Day1',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Day
          movement="Deadlift"
          accessories={[
            'Tempo Squat',
            'Stiff Leg Dealift',
            'Barbell Row',
            'Planks',
          ]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
