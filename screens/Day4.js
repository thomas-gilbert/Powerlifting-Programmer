import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Day from '../components/Day';

export default class Day4 extends React.Component {
  state = {
    ohp: '0'
  };

  async componentDidMount() {
    const ohp = await AsyncStorage.getItem('ohp');
    this.setState({
      ohp
    });
  }

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
          value={this.state.ohp}
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
