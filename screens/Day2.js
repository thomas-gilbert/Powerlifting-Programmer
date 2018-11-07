import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Day from '../components/Day';

export default class Day2 extends React.Component {
  state = {
    bench: '0'
  };

  async componentDidMount() {
    const bench = await AsyncStorage.getItem('bench');
    this.setState({
      bench
    });
  }

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
          value={this.state.bench}
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
