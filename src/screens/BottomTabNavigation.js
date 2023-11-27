import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FoodListScreen from "./FoodListScreen";
import OrderCartScreen from "./OrderCartScreen";
import UserProfileScreen from "./UserProfileScreen";
import OrderScreen from "./OrderScreen";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    // screenOptions={({route})=>{
    //   tabBarStyle: styles.tabbar
    // }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color}></Ionicons>
          ),
        }}
        name="FoodList"
        component={FoodListScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={24} color={color}></Ionicons>
          ),
        }}
        name="OrderCart"
        component={OrderCartScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper" size={24} color={color}></Ionicons>
          ),
        }}
        name="Order"
        component={OrderScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={color}
            ></Ionicons>
          ),
        }}
        name="UserProfile"
        component={UserProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;

const styles = StyleSheet.create({

  tabbar:{
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'orange'
  }

});
