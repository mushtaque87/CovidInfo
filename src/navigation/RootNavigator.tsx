import * as React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import CountriesListPage from '../screens/CountriesListPage/CountriesListPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CountryList" component={CountriesListPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
