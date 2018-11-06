import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Day from '../components/Day';

export default class Day4 extends React.Component {
  static navigationOptions = {
    title: 'Day4',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Day
          movement="Overhead Press"
          accessories={[
            'Spoto Press',
            'Pulldown',
            'Tricep Pushdown',
            'DB Curl',
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
