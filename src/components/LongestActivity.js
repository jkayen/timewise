import React from 'react';
import { View, Text } from 'react-native';

import getActivitiesByTime from '../database/helpers/getActivitiesByTime';

export default class LongestActivity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      longestActivity: ''
    }
  }
  componentWillMount() {
    getActivitiesByTime()
    .then(activitiesList => {
      if (activitiesList) {
        this.setState({longestActivity: activitiesList[0].activityName})
      }
    })
  }
  render() {
    return (
      <View>
        <Text>You've spent most of your time:</Text>
        <Text>{this.state.longestActivity}</Text>
      </View>
    )
  }
}
