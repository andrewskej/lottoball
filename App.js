
import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import BallList from './Components/BallList'

export default class App extends Component {
  

  
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LT!</Text>
        <BallList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
