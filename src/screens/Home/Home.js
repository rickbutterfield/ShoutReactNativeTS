import React, { Component, Props } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {

  _onPressPeople() {
    this.props.navigator.switchToTab({
      tabIndex: 1
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this._onPressPeople()}>
            <Text style={styles.buttonText}>Our People</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>World Offices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Correspondents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nearest Correspondents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vessel Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Emergency Line</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#333'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    flex: 0,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '33.33333%'
  },
  buttonText: {
    color: '#fff'
  },
  h1: {
    marginBottom: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff'
  },
  h2: {
    marginBottom: 16,
    fontSize: 28,
    color: '#fff'
  },
  paragraph: {
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#fff'    
  },
  code: {
    fontStyle: 'italic'
  }
});

export default HomeScreen;