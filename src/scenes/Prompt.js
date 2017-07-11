import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import Time from '../components/Time';
import EventInput from '../components/EventInput';

import ReturnHomeFromPrompt from '../components/ReturnHomeFromPrompt';

export default function Prompt() {
  return (
    <View>
      <Header />
      <Time />
      <EventInput />
      <ReturnHomeFromPrompt />
    </View>
  )
}
