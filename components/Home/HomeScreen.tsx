import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';

interface Props { };
interface State { };

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Text
            style={styles.h1}>
            Welcome to ShoutReactNativeTS
          </Text>
          <Text
            style={styles.paragraph}>
            This is the Shout base project for developing React Native apps in TypeScript for iOS and Android. This project is based off Ash Furrow's fork of Microsoft's RNTS starter project.
          </Text>
          <Text
            style={styles.h2}>
            Running the solution
          </Text>
          <Text style={styles.paragraph}>
            Once loaded, run <Text style={styles.code}>npm i</Text> to get all dependencies installed, then run <Text style={styles.code}>react-native run-[ios|android]</Text>.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16
  },
  h1: {
    marginBottom: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000'
  },
  h2: {
    marginBottom: 16,
    fontSize: 28,
    color: '#333'
  },
  paragraph: {
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 24,
    color: '#000'    
  },
  code: {
    fontStyle: 'italic'
  }
});

export default HomeScreen;