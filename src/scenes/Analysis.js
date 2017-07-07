import React from 'react';
import { View } from 'react-native';

import LongestActivity from '../components/LongestActivity';
import OrderedActivities from '../components/OrderedActivities';
import ReturnHome from '../components/ReturnHome';

export default function Analysis() {
  return (
    <View>
      <LongestActivity />
      <OrderedActivities />
      <ReturnHome />
    </View>
  )
}
