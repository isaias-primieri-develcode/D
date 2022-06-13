/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './src/contexts/auth';
import AllRoutes from './src/routes/routes.routes';
import {RegisterProvider} from './src/contexts/Register';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor='#c20c18'/>
    <AuthProvider>
      <RegisterProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
                <AllRoutes />
          </NavigationContainer>
        </ThemeProvider>
      </RegisterProvider>
    </AuthProvider>
    </>
  );
}
