import {View, Text} from 'react-native';
import React from 'react';

import Home from '../screen/BottomTabPages/Home';
import SignUp from '../screen/SignUp';
import Login from '../screen/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPage from '../screen/ForgotPage';
import TopNavigation from './TopNavigation';
import WelcomePage from '../screen/WelcomePage';
import BottomNavigation from './BottomNavigation';
import CoffeeDetailScreen from '../screen/CoffeeDetailScreen';
import DrawerNavigation from './DrawerNavigation';
import ProfilePage from '../screen/ProfilePage';
import PaymentScreen from '../screen/BottomTabPages/PaymentScreen';
import SettingsScreen from '../screen/BottomTabPages/SettingsScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomePage"
          component={WelcomePage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={BottomNavigation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPage"
          component={ForgotPage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CoffeeDetailScreen"
          component={CoffeeDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfilePage"
          component={ProfilePage}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={PaymentScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
