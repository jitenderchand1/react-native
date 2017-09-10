import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Permissions, Constants } from 'expo';

export default class App extends Component {

  async _getNotification(){
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status !== 'granted') {
      alert('Hey! You might want to enable notifications for my app, they are good.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._getNotification}>
          <View style={styles.button}>
            <Text style={{color:'#fff'}}>Notification</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button:{
    backgroundColor:'#056ECF',
    padding:10,
  }
});