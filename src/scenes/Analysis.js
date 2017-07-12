import React from 'react';
import { View } from 'react-native';

import LongestActivity from '../components/LongestActivity';
import OrderedActivities from '../components/OrderedActivities';
import HomeButton from '../components/HomeButton';

export default function Analysis() {
  return (
    <View>
      <LongestActivity />
      <OrderedActivities />
      <HomeButton />
    </View>
  )
}
