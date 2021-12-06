import * as React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Dashboard from '../screens/Dashboard/Dashboard';
import CountriesListPage from '../screens/CountriesListPage/CountriesListPage';
import {createStackNavigator} from 'react-navigation-stack';
import {NavigationScreenOptions} from '@types/react-navigation';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface INavigationOptionsArg {
  navigation: NavigationScreenProp<NavigationState> & NavigationStackProp;
}

const DashboardNavigator = createStackNavigator(
    {
        _Default: {
            navigationOptions: (arg: INavigationOptionsArg) => {
                return {
                    title: 'My home',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                } as NavigationScreenOptions;
            },
            screen: Dashboard,
        },
        _DetailPage: {
            screen: CountriesListPage,
        },
    },
    {
        initialRouteName: '_DetailPage',
    }

);


const RootNavigator = createSwitchNavigator(
  {
    Dashboard: {
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
  //     _DetailPage: {
  //   screen: CountriesListPage,
  // },
  },
  {
    initialRouteName: 'Dashboard',
  },
);


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red' }}>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>

            </View>
        );
    }
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return
    (
        <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

 //export default createAppContainer(AppNavigator);
export default AppNavigator;
