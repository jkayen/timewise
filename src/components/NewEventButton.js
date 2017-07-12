import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

import getCurrentEvent from '../database/helpers/getCurrentEvent';
import getEvent from '../database/helpers/getEvent';

export default class NewEventButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentActivity: ''
    }
  }
  componentWillMount() {
    getCurrentEvent()
    .then(getEvent)
    .then(eventObj => {
      if (eventObj) {
        this.setState({
          currentActivity: JSON.parse(eventObj).activityName
        })
      }
    })
  }
  render() {
    return (
      <Link to={`/prompt`}>
        <Text>
          {this.state.currentActivity ? (
            `No longer ${this.state.currentActivity}?`
          ) : (
            `What are you up to?`
          )}
        </Text>
      </Link>
    )
  }
}
