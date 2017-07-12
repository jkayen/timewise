import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import Time from '../components/Time';
import EventInput from '../components/EventInput';

import HomeButton from '../components/HomeButton';

export default function Prompt() {
  return (
    <View>
      <Header />
      <Time />
      <EventInput />
      <HomeButton />
    </View>
  )
}
