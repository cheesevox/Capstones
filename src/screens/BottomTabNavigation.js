import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FoodListScreen from "./FoodListScreen";
import OrderCartScreen from "./OrderCartScreen";
import WalletScreen from "./WalletScreen";
import UserProfileScreen from "./UserProfileScreen";
import ChefHomeScreen from "./ChefHome";
import PostIcon from "../components/Icons/PostIcon";
import KitchenIcon from "../components/Icons/KitchenIcon";
import OrderIcon from "../components/Icons/OrderIcon";
import KitchenScreen from "./KitchenScreen";
import { RouteName } from "../Constant";
import ChefOrderScreen from "./ChefScreen/ChefOrderScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const role = "chef";

  return role !== "chef" ? (
    <Tab.Navigator>
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
            <Ionicons name="wallet-outline" size={24} color={color}></Ionicons>
          ),
        }}
        name="Wallet"
        component={WalletScreen}
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
  ) : (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color}></Ionicons>
          ),
        }}
        name={"Home"}
        component={ChefHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <PostIcon size={24} color={color} />,
        }}
        name="Post"
        component={OrderCartScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <KitchenIcon size={24} color={color} />,
        }}
        name={"Kitchen"}
        component={KitchenScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <OrderIcon size={24} color={color} />,
        }}
        name="Order"
        component={ChefOrderScreen}
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

const styles = StyleSheet.create({});
