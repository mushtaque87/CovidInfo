/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme, View, Text, Platform, AppStateStatus
} from 'react-native';

import RootNavigator from "./src/navigation/RootNavigator";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import AppNavigator from "./src/navigation/RootNavigator";
import Dashboard from "./src/screens/Dashboard/Dashboard";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountriesListPage from "./src/screens/CountriesListPage/CountriesListPage";

import NetInfo from '@react-native-community/netinfo'
import { onlineManager } from 'react-query'
import { focusManager } from 'react-query'
import useAppState from 'react-native-appstate-hook'




const App = () => {
  const queryClient = new QueryClient();
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

    function onAppStateChange(status: AppStateStatus) {
        if (Platform.OS !== 'web') {
            focusManager.setFocused(status === 'active')
        }
    }

    useAppState({
        onChange: onAppStateChange,
    })

    onlineManager.setEventListener(setOnline => {
        return NetInfo.addEventListener(state => {
            setOnline(state.isConnected)
        })
    })

    return (
      <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="CountryList" component={CountriesListPage} />
          </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
