/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Component from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation, TabBasedApp, TabScreen, NavigatorStyle } from 'react-native-navigation';
import { registerScreens } from './components/Screens';

registerScreens();

const navStyle: NavigatorStyle = {
  // Global
  navBarBackgroundColor: '#9f1833',
  navBarTextColor: '#ffffff',

  // iOS
  statusBarTextColorScheme: 'light',
  topBarElevationShadowEnabled: true,
  largeTitle: true,

  // Android
  statusBarColor: '#9f1833'
}

const tabs: TabScreen[] = [
  {
    label: 'Home',
    screen: 'shout.HomeScreen',
    icon: require('./assets/logo/logo.png'),
    title: 'Shout Digital',
    navigatorStyle: navStyle
  },
  {
    label: 'About',
    screen: 'shout.AboutScreen',
    icon: require('./assets/logo/logo.png'),
    title: 'About Shout',
    navigatorStyle: navStyle
  }
];

const params: TabBasedApp = {
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
}

Navigation.startTabBasedApp(params);