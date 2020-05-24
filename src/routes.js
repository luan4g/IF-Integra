import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import MainRoutes from './pages/MainRoutes';

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false
          })}
        >
          <Stack.Screen 
            name="Login" 
            component={Login}
          />
          <Stack.Screen
            name="Routes"
            component={MainRoutes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;