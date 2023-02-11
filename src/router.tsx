import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as Pages from './pages';
import * as Components from './components'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <Components.BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Pages.Home} options={{headerShown: false}} />
      <Tab.Screen name="Pesanan" component={Pages.Pesanan} options={{headerShown: false}} />
      <Tab.Screen name="Akun" component={Pages.Akun} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
        <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
        <Stack.Screen name="Splash" component={Pages.Splash} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})