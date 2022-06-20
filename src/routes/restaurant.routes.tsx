import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RestaurantProfile} from '../screens/RestaurantProfile/restaurant.page';
import {Routes} from './index.routes';

const Stack = createNativeStackNavigator();

export function RestaurantRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="Home"
        component={Routes}
      />
      <Stack.Screen
        options={{headerShown: false, animation: 'fade'}}
        name="RestaurantProfile"
        component={RestaurantProfile}
      />
    </Stack.Navigator>
  );
}
