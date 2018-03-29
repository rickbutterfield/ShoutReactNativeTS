import { Navigation, TabBasedApp, TabScreen } from 'react-native-navigation';

import HomeScreen from './Home';
import PeopleScreen from './People';
import CorrespondentsScreen from './Correspondents';
import RecentScreen from './Recent';
import FavouritesScreen from './Favourites';

Navigation.registerComponent('shout.HomeScreen', () => HomeScreen);
Navigation.registerComponent('shout.PeopleScreen', () => PeopleScreen);
Navigation.registerComponent('shout.CorrespondentsScreen', () => CorrespondentsScreen);
Navigation.registerComponent('shout.RecentScreen', () => RecentScreen);
Navigation.registerComponent('shout.FavouritesScreen', () => FavouritesScreen);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'shout.HomeScreen',
        title: 'North',
        icon: require('../../assets/logo/logo.png')
      },
      {
        label: 'Our People',
        screen: 'shout.PeopleScreen',
        title: 'Our People',
        icon: require('../../assets/logo/logo.png')
      },
      {
        label: 'Correspondents',
        screen: 'shout.CorrespondentsScreen',
        title: 'Correspondents',
        icon: require('../../assets/logo/logo.png')
      },
      {
        label: 'Recent',
        screen: 'shout.RecentScreen',
        title: 'Recent',
        icon: require('../../assets/logo/logo.png')
      },
      {
        label: 'Favourites',
        screen: 'shout.FavouritesScreen',
        title: 'Favourites',
        icon: require('../../assets/logo/logo.png')
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
      tabBarButtonColor: '#fff',
      tabBarSelectedButtonColor: '#842d31',
      tabBarSelectedLabelColor: '#fff'
    }
  });
};