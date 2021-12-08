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
  useColorScheme, View,Text
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
import CountriesDetailsPage from "./src/screens/CountryDetailPage/CountryDetailsPage";


const App = () => {
  const queryClient = new QueryClient();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
    );
  }

  return (
      <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="CountryList" component={CountriesListPage} />
              <Stack.Screen name="CountryDetails" component={CountriesDetailsPage} />
          </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
