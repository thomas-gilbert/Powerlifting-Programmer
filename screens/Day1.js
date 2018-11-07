import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Day from '../components/Day';

export default class Day1 extends React.Component {
  state = {
    deadlift: '0'
  };

  async componentDidMount() {
    const deadlift = await AsyncStorage.getItem('deadlift');
    this.setState({
      deadlift
    });
  }

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
          value={this.state.deadlift}
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
