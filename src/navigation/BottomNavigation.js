import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../screen/BottomTabPages/Cart';
import FavouriteScreen from '../screen/BottomTabPages/FavouriteScreen';
import PaymentScreen from '../screen/BottomTabPages/PaymentScreen';
import OrderScreen from '../screen/BottomTabPages/OrderScreen';
import Home from '../screen/BottomTabPages/Home';
import CustomBottomBar from '../component/CustomBottomBar';
import SettingsScreen from '../screen/BottomTabPages/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomBar {...props} />}>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen options={{headerShown: false}} name="Cart" component={Cart} />
      {/* <Tab.Screen name="Payment" component={PaymentScreen} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}

      <Tab.Screen
        options={{headerShown: false}}
        name="Favourite"
        component={FavouriteScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Order"
        component={OrderScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
