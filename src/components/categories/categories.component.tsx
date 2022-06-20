/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
}

function Category({text}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width: 99,
        height: 28,
        borderRadius: 16,
        backgroundColor: '#C20C18',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#eee', fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  );
}

export function Categories() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{paddingHorizontal: 4}}
      style={{flexDirection: 'row'}}
      showsHorizontalScrollIndicator={false}>
      <Category text="Pizza" />
      <Category text="Churrasco" />
      <Category text="Almoço" />
      <Category text="Massas" />
      <Category text="Doces" />
      <Category text="Café" />
    </ScrollView>
  );
}
