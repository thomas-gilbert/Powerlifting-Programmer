import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Grid, Col, H3, Text } from 'native-base'

export default Row = ({ exercise, sets, reps }) => {
  return (
    <View>
      <Grid>
        <Col style={styles.row}>
          <H3 style={styles.exercise}>{ exercise }</H3>
        </Col>
        <Col style={styles.row}>
          <Text>Sets</Text>
          <Text>{ sets || 3 }</Text>
        </Col>
        <Col style={styles.row}>
          <Text>Reps</Text>
          <Text>{ reps || 10 }</Text>
        </Col>
        <Col style={styles.row}>
          <Text>Weight</Text>
          <Text></Text>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  exercise: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  },
  row: {
    height: 100
  }
});