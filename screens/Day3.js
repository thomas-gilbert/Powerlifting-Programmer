import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import Day from '../components/Day';

export default class Day3 extends React.Component {
  state = {
    squat: '0'
  };

  async componentDidMount() {
    const squat = await AsyncStorage.getItem('squat');
    this.setState({
      squat
    });
  }

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
          value={this.state.squat}
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
