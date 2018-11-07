import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Grid, Col, H3, Text } from 'native-base'

export default Row = ({ exercise, sets, reps, value }) => {
  return (
    <View>
      <Grid>
        <Col style={[styles.row, styles.exercise]}>
          <Text style={[styles.bold, styles.text]}>{exercise}</Text>
        </Col>
        <Col style={styles.row}>
          <Text style={[styles.bold, styles.text]}>Sets/Reps</Text>
          <Text style={styles.text}>{sets || 3}x{reps || 10}</Text>
        </Col>
        <Col style={styles.row}>
          <Text style={[styles.bold, styles.text]}>Weight</Text>
          <Text style={styles.text}>{value}</Text>
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  exercise: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#f3f3f3'
  },
  row: {
    marginBottom: 10,
    paddingVertical: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center'
  }
});