import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Day from '../components/Day';

export default class Day2 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Day
          movement="Bench"
          accessories={[
            'Face Pull',
            'DB Incline',
            'Pulldown',
            'Skull Crusher',
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
