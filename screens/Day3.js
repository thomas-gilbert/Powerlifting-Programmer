import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Day from '../components/Day';

export default class Day3 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Day
          movement="Squat"
          accessories={[
            'Block Pull',
            'Barbell Row',
            'Plank',
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
