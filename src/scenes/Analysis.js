import React from 'react';
import { View } from 'react-native';

import LongestActivity from '../components/LongestActivity';
import OrderedActivities from '../components/OrderedActivities';
import ReturnHomeFromAnalysis from '../components/ReturnHomeFromAnalysis';

export default function Analysis() {
  return (
    <View>
      <LongestActivity />
      <OrderedActivities />
      <ReturnHomeFromAnalysis />
    </View>
  )
}
