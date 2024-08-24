import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Cappuccino from '../screen/TopTabPages/Cappuccino';
import Espresso from '../screen/TopTabPages/Espresso';
import AllData from '../screen/TopTabPages/AllData';
import Americano from '../screen/TopTabPages/Americano';
import CustomTopTabBar from '../component/CustomTopTabBar';
const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        swipeEnabled: false,
      }}
      tabBar={props => <CustomTopTabBar {...props} />}>
      <Tab.Screen name="All" component={AllData} />
      <Tab.Screen name="Cappuccino" component={Cappuccino} />
      <Tab.Screen name="Espresso" component={Espresso} />
      <Tab.Screen name="Americano" component={Americano} />
    </Tab.Navigator>
  );
};

export default TopNavigation;
