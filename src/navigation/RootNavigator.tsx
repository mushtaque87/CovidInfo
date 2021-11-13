import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Dashboard from '../screens/Dashboard/Dashboard';
import CountriesListPage from '../screens/DetailPage/CountriesListPage';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationScreenOptions} from '@types/react-navigation';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';

interface INavigationOptionsArg {
  navigation: NavigationScreenProp<NavigationState> & NavigationStackProp;
}

// const DashboardNavigator = createStackNavigator({
//   _Default: {
//     navigationOptions: (arg: INavigationOptionsArg) => {
//       return {
//         title: 'My home',
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       } as NavigationScreenOptions;
//     },
//     screen: Dashboard,
//   },
//   _DetailPage: {
//     screen: CountriesListPage,
//   },
//   initialRouteName: '_DetailPage',
// });

const RootNavigator = createSwitchNavigator(
  {
    _Dashboard: {
      // navigationOptions: (arg: INavigationOptionsArg) => {
      //   return {
      //     title: 'My home',
      //     headerStyle: {
      //       backgroundColor: '#f4511e',
      //     },
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       fontWeight: 'bold',
      //     },
      //   } as NavigationScreenOptions;
      // },
      screen: Dashboard,
    },
      _DetailPage: {
    screen: CountriesListPage,
  },
  },
  {
    initialRouteName: '_Dashboard',
  },
);

export default createAppContainer(RootNavigator);
