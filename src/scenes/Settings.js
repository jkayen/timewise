import React from 'react';
import { StyleSheet, View } from 'react-native';

import EraseDataButton from '../components/EraseDataButton';
import HomeButton from '../components/HomeButton';

export default function Settings() {
  return (
    <View>
      <EraseDataButton />
      <HomeButton />
    </View>
  )
}
