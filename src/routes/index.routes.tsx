/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import RNBootSplash from 'react-native-bootsplash'
import {Image, Text, View} from 'react-native';
import HomeIcon from '../assets/icons/home.png';
import FavoritesIcon from '../assets/icons/favorites.png';
import ProfileIcon from '../assets/icons/profile.png';
import HistoricIcon from '../assets/icons/historic.png';
import {Styles} from './style.routes';
import {Favorites} from '../screens/Favorites/favorites.page';
import {Historic} from '../screens/Historic/historic.page';
import {Profile} from '../screens/Profile/profile.page';
import {Home} from '../screens/Home/home.page';

const Tab = createBottomTabNavigator();

export function Routes() {
  // useEffect(() => {
  //   RNBootSplash.hide({ fade: true })
  // }, [])
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          width: '100%',
          position: 'relative',
          borderTopWidth: 4,
          borderTopColor: '#eaeaea',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                <Image
                  source={HomeIcon}
                  style={{
                    tintColor: focused ? '#c20c18' : '#DEDCDC',
                  }}
                />
              </View>
              <View style={Styles.TextContainer}>
                {focused ? null : <Text style={Styles.Text}>Inicío</Text>}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                <Image
                  source={FavoritesIcon}
                  style={{
                    tintColor: focused ? '#c20c18' : '#DEDCDC',
                  }}
                />
              </View>
              <View style={Styles.TextContainer}>
                {focused ? null : <Text style={Styles.Text}>Favoritos</Text>}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Historic"
        component={Historic}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                <Image
                  source={HistoricIcon}
                  style={{
                    tintColor: focused ? '#c20c18' : '#DEDCDC',
                  }}
                />
              </View>
              <View style={Styles.TextContainer}>
                {focused ? null : <Text style={Styles.Text}>Histórico</Text>}
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={Styles.Container}>
              <View style={Styles.Icons}>
                <Image
                  source={ProfileIcon}
                  style={{
                    tintColor: focused ? '#c20c18' : '#DEDCDC',
                  }}
                />
              </View>
              <View style={Styles.TextContainer}>
                {focused ? null : <Text style={Styles.Text}>Perfil</Text>}
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
