import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import Time from '../components/Time';
import ActivityInput from '../components/ActivityInput';
import SubmitButton from '../components/SubmitButton';

export default function Prompt() {
  return (
    <View>
      <Header />
      <Time />
      <ActivityInput />
      <SubmitButton />
    </View>
  )
}
