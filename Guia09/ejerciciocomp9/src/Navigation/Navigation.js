import React from "react";
import Cats from "../screens/Cats";
import Dogs from "../screens/Dogs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
       <Tab.Screen
        name='Cats'
        component={Cats}
        options={{
          title: 'Cats',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='cat' size={size} color={'blue'} /> 
          ),
        }}
      />
      <Tab.Screen
        name='Dogs'
        component={Dogs}
        options={{
          title: 'Dogs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='dog' size={size} color={'blue'} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}
