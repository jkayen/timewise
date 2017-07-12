import React from 'react';
import { View, Text } from 'react-native';

import getCurrentEvent from '../database/helpers/getCurrentEvent';
import timeParser from '../utilities/timeParser';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      startTime: 0
    };
  }
  componentWillMount() {
    getCurrentEvent()
    .then(startTime => {
      this.setState({startTime})
    })
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      currentTime: new Date()
    });
  }
  render() {
    return (
      <View>
        {this.state.startTime ? (
          <Text>It's been {timeParser(this.state.startTime, this.state.currentTime)}.</Text>
        ) : (
          <Text>It is {this.state.currentTime.toLocaleTimeString()}.</Text>
        )}
      </View>
    )
  }
}
