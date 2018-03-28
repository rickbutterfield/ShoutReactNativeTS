import { Navigation } from 'react-native-navigation';

import HomeScreen from './Home/HomeScreen';
import AboutScreen from './About/AboutScreen';

export function registerScreens() {
  Navigation.registerComponent('shout.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('shout.AboutScreen', () => AboutScreen);
}