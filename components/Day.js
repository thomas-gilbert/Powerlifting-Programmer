import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Day extends React.Component {
  static propTypes = {
    movement: PropTypes.string.isRequired,
    accessories: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
  };

  renderItem({ item }) {
    return <Row exercise={item} />
  }

  keyExtractor(item) {
    return item;
  }

  render() {
    return (
      <View style={styles.container}>
        <Row exercise={this.props.movement} sets={3} reps={5} value={this.props.value} />
        <Row exercise={this.props.movement} sets={1} reps="AMRAP" />
        <FlatList
          data={this.props.accessories}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 30
  }
})