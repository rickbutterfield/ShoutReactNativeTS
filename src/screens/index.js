import { Platform } from 'react-native';
import { Navigation, TabBasedApp, TabScreen } from 'react-native-navigation';

import HomeScreen from './Home';
import PeopleScreen from './People';
import CorrespondentsScreen from './Correspondents';
import RecentScreen from './Recent';
import FavouritesScreen from './Favourites';
import NavigationDrawer from './Navigation';

Navigation.registerComponent('shout.HomeScreen', () => HomeScreen);
Navigation.registerComponent('shout.PeopleScreen', () => PeopleScreen);
Navigation.registerComponent('shout.CorrespondentsScreen', () => CorrespondentsScreen);
Navigation.registerComponent('shout.RecentScreen', () => RecentScreen);
Navigation.registerComponent('shout.FavouritesScreen', () => FavouritesScreen);
Navigation.registerComponent('shout.NavigationDrawer', () => NavigationDrawer);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'shout.HomeScreen',
        title: 'North',
        icon: require('../../assets/icons/home.png')
      },
      {
        label: 'Our People',
        screen: 'shout.PeopleScreen',
        title: 'Our People',
        icon: require('../../assets/icons/home.png')
      },
      {
        label: 'Correspondents',
        screen: 'shout.CorrespondentsScreen',
        title: 'Correspondents',
        icon: require('../../assets/icons/home.png')
      },
      {
        label: 'Recent',
        screen: 'shout.RecentScreen',
        title: 'Recent',
        icon: require('../../assets/icons/home.png')
      },
      {
        label: 'Favourites',
        screen: 'shout.FavouritesScreen',
        title: 'Favourites',
        icon: require('../../assets/icons/home.png')
      },
    ],
    tabsStyle: {
      tabBarBackgroundColor: '#1a1a1a',
      tabBarLabelColor: '#fff',
      tabBarSelectedButtonColor: '#842d31',
      tabBarSelectedLabelColor: '#fff'
    },
    appStyle: {
      navBarBackgroundColor: '#2a2a2a',
      navBarTextColor: '#fff',
      statusBarTextColorScheme: 'light',
      tabBarBackgroundColor: '#1a1a1a',
      tabBarSelectedButtonColor: '#fff',
      bottomTabBadgeTextColor: '#fff',
      bottomTabBadgeBackgroundColor: '#fff'
    },
  });
};