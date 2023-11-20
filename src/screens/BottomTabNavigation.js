import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import FoodListScreen from './FoodListScreen';
import OrderCartScreen from './OrderCartScreen';
import WalletScreen from './WalletScreen';
import UserProfileScreen from './UserProfileScreen';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
   <Tab.Navigator>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='home-outline' size={24} color={color}></Ionicons>
        }} 
        name="FoodList" 
        component={FoodListScreen} />
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='cart-outline' size={24} color={color}></Ionicons>
        }} 
        name='OrderCart' 
        component={OrderCartScreen}/>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='wallet-outline' size={24} color={color}></Ionicons>
          }} 
          name='Wallet' 
          component={WalletScreen}/>
        <Tab.Screen options={{
          headerShown:false,
          tabBarIcon: ({color}) => <Ionicons name='person-circle-outline' size={24} color={color}></Ionicons>
          }} 
          name='UserProfile' 
          component={UserProfileScreen}/>
   </Tab.Navigator> 
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})