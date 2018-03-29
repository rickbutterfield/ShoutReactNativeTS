import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';

interface Props { };
interface State { };

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Our People</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>World Offices</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Correspondents</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Nearest Correspondents</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Vessel Search</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Emergency Line</Text>
          </TouchableHighlight>
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
    // padding: 16
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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