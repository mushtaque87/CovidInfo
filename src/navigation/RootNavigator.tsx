
import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Dashboard from '../screens/Dashboard/Dashboard';
import DetailPage from "../screens/DetailPage/DetailPage";

const RootNavigator = createSwitchNavigator(
  {
    _DetailPage: {
      screen: DetailPage,
    },
    _Dashboard: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: '_Dashboard',
  },
);

export default createAppContainer(RootNavigator);
