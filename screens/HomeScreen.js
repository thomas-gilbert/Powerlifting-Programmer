import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage
} from 'react-native';
import {
  Form,
  Item,
  Input,
  H1,
  H2,
  Picker,
  Icon,
  Label,
  Container,
  Content
} from 'native-base';

export default class HomeScreen extends React.Component {
  state = {
    measure: 'kg',
    deadlift: '0',
    bench: '0',
    squat: '0',
    ohp: '0'
  }

  async componentDidMount() {
    const values = await AsyncStorage.multiGet([
      'measure',
      'deadlift',
      'bench',
      'squat',
      'ohp'
    ]);
    let newState = {};

    values.map((value) => {
      newState[value[0]] = value[1];
    });

    this.setState(newState);
  }

  onValueChange = async (name, value) => {
    try {
      this.setState({
        [name]: value
      });
      await AsyncStorage.setItem(name, value);
    } catch (error) {
      console.warn('measure not set');
    }
  }


  render() {
    return (
      <Container style={styles.container} >
        <Content contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
            <H1 style={[styles.title, styles.text]}>Powerlifting Programmer</H1>
            <H2 style={styles.text}>Get Started!</H2>
            <Form style={styles.form}>
              <Item inlineLabel>
                <Label>Deadlift</Label>
                <Input
                  onChangeText={(value) => this.onValueChange('deadlift', value)}
                  value={this.state.deadlift}
                  keyboardType='numeric'
                  maxLength={4}
                />
              </Item>
              <Item inlineLabel>
                <Label>Bench</Label>
                <Input
                  onChangeText={(value) => this.onValueChange('bench', value)}
                  value={this.state.bench}
                  keyboardType='numeric'
                  maxLength={4}
                />
              </Item>
              <Item inlineLabel>
                <Label>Squat</Label>
                <Input
                  onChangeText={(value) => this.onValueChange('squat', value)}
                  value={this.state.squat}
                  keyboardType='numeric'
                  maxLength={4}
                />
              </Item>
              <Item inlineLabel>
                <Label>OHP</Label>
                <Input
                  onChangeText={(value) => this.onValueChange('ohp', value)}
                  value={this.state.ohp}
                  keyboardType='numeric'
                  maxLength={4}
                />
              </Item>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down" />}
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.measure}
                  onValueChange={(value) => this.onValueChange('measure', value)}
                >
                  <Picker.Item label="kg" value="kg" />
                  <Picker.Item label="lbs" value="lbs" />
                </Picker>
              </Item>
            </Form>
          </View>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    flexGrow: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    marginTop: 30,
    width: 250
  },
  text: {
    textAlign: 'center'
  },
  title: {
    marginBottom: 10
  },
});
