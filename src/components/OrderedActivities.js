import React from 'react';
import { View, Text, FlatList } from 'react-native';

import getActivitiesByTime from '../database/helpers/getActivitiesByTime';

export default class OrderedActivities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activitiesList: []
    }
  }
  componentWillMount() {
    getActivitiesByTime()
    .then(activitiesList => {
      this.setState({activitiesList})
    })
  }
  render() {
    return (
      <View>
        <Text>Here's how the rest of your time stacks up:</Text>
        <FlatList
          data={this.state.activitiesList}
          renderItem={({item}) => <Text>{item.activityName}: {item.percentOfTime}%</Text>}
        />
      </View>
    )
  }
}


