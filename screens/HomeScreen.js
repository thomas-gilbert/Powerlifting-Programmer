import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Form,
  Item,
  Input,
  H1,
  H2,
  Picker,
  Icon
} from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'kg'
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(selected) {
    this.setState({
      selected
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <H1 style={[styles.title, styles.text]}>Powerlifting Programmer</H1>
          <H2 style={styles.text}>Get Started!</H2>
          <Form style={styles.form}>
            <Item>
              <Input placeholder="Weight" />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}
              >
                <Picker.Item label="kg" value="kg" />
                <Picker.Item label="lbs" value="lbs" />
              </Picker>
            </Item>
          </Form>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    marginTop: 30
  },
  text: {
    textAlign: 'center'
  },
  title: {
    marginBottom: 10
  },
});
