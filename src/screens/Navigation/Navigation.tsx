import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableHighlight, DrawerLayoutAndroid } from 'react-native';

interface Props { };
interface State { };

class NavigationDrawer extends React.Component<Props> {
  render() {
    let navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerBackgroundColor="#fff"
        renderNavigationView={() => navigationView}
        style={{backgroundColor: '#fff'}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default NavigationDrawer;