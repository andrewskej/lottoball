import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native';
import * as L from '../lib/Lib' //this is how you import functions

export default class Ball extends Component {
  
  
  render() {

    return (
        <View className={this.props.className} style={this.props.style}>
            <Text style={{marginLeft:'34%', marginTop:14, fontSize:25, fontWeight:'bold'}}>{this.props.number}</Text>
        </View>
    )
  }
}
