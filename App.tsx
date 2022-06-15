// /* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './src/contexts/auth';
import AllRoutes from './src/routes/routes.routes';
import {RegisterProvider} from './src/contexts/Register';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import RNBootSplash from 'react-native-bootsplash';
import {StatusBar} from 'react-native';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#c20c18" />
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
