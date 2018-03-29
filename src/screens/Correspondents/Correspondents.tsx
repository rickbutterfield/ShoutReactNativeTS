import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';

interface Props { };
interface State { };

class CorrespondentsScreen extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Text
            style={styles.intro}>
            Shout Digital was formed in 2009 and we have built a proud team of 30 on the back of great client solutions and a lot of hard work.
          </Text>
          <Text
            style={styles.paragraph}>
            We believe in building long term, trusted partnerships with our clients. Our quality and care is in everything we deliver. Our expertise helps ambitious clients revolutionise their digital future.
          </Text>
          <Text
            style={styles.paragraph}>
            The Shout team are passionate about what we do and we are pleased to say that we have some of the most experienced and talented in the industry. 
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
  intro: {
    marginBottom: 16,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 'bold'
  },
  code: {
    fontStyle: 'italic'
  }
});

export default CorrespondentsScreen;