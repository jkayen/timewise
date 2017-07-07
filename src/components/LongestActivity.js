import React from 'react';
import { View, Text } from 'react-native';

import activitiesByTime from '../utilities/duration';

export default function LongestActivity() {
  // call activitiesByTime().then(arr => arr[0].name)
  return (
    <View>
      <Text>You've spent most of your time:</Text>
      <Text>{activitiesByTime()[0].name}</Text>
    </View>
  )
}

