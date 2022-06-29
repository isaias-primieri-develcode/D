/* eslint-disable quotes */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantProfile } from "../screens/RestaurantProfile/restaurant.page";
import { Routes } from "./index.routes";
import { CartProvider } from "../contexts/cart";
import { Cart } from "../screens/Cart/cart.page";

const Stack = createNativeStackNavigator();

export function RestaurantRoutes() {
  return (
    <CartProvider>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="RoutesHome"
          component={Routes}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="RestaurantProfile"
          component={RestaurantProfile}
        />
        <Stack.Screen
          options={{ headerShown: false, animation: "fade" }}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </CartProvider>
  );
}
