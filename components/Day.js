import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Day extends React.Component {
  static propTypes = {
    movement: PropTypes.string.isRequired,
    accessories: PropTypes.array.isRequired,
  }; 

  renderItem({ item }) {
    return <Row exercise={item} />
  }

  keyExtractor(item) {
    return item;
  }

  render() {
    return (
      <View>
        <Row exercise={this.props.movement} sets={3} reps={5}/>
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