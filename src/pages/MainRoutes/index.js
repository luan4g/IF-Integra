import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Fontisto, AntDesign } from "@expo/vector-icons";

import Home from "../Home";
import Notifications from "../Notifications";

const Tab = createMaterialBottomTabNavigator();

class MainRoutes extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#333333"
        inactiveColor="#999"
        shifting={true}
        sceneAnimationEnabled={true}
        barStyle={{
          position: "absolute",
          height: 50,
          elevation: 15,
        }}
      >
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ color }) => {
              return <Fontisto name="bell" size={20} color={color} />;
            },
            tabBarColor: "#fff",
            tabBarBadge: 4,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => {
              return <AntDesign name="home" size={20} color={color} />;
            },
            tabBarColor: "#fff",
            tabBarBadge: true,
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default MainRoutes;
