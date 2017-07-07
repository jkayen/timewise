import React from 'react';
import { View, Text, FlatList } from 'react-native';

import activitiesByTime from '../utilities/duration';

export default function OrderedActivities() {
  // call activitiesByTime().then(arr => arr[0].name)
  const activityData = activitiesByTime();
  const totalTime = activityData.reduce((total, activity) => total + activity.duration, 0)
  return (
    <View>
      <Text>Here's how the rest of your time stacks up:</Text>
      <FlatList
        data={activityData}
        renderItem={({item}) => <Text>{item.name}: {Math.floor(item.duration / totalTime * 100)}%</Text>}
      />
    </View>
  )
}


