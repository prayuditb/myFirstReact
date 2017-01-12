/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class reactBayu1 extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.head}>
            <Text style={style.headtext}>PRAYUDI TIRTA BAYU</Text>
        </View>
        <View style={style.body}>
            <Image style={style.img} source={require("./bayu.jpg")}/>
            <Text style={style.bodytext}>Batch 1 Refactory </Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create( {
  container: {
    flex :1
  },
  head:{
    flex:1,
    backgroundColor: '#2C6DCC',
  },
  body:{
    flex:4,
    backgroundColor: '#84B6FF',
    alignItems : 'center'
  },
  img:{
    height: 150,
    width: 150,
    marginTop:20,
    marginBottom:20
  },
  headtext:{
    fontSize: 28,
    textAlign:'center'
  },
  bodytext:{
    fontSize: 20,
    textAlign: 'center'
  }
});
AppRegistry.registerComponent('reactBayu1', () => reactBayu1);
