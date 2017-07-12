import React from 'react';
import { View } from 'react-native';

import Title from '../components/Title';
import Time from '../components/Time';
import NewEventButton from '../components/NewEventButton';
import FooterHome from '../components/FooterHome';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentEvent: false
    }
  }
  render() {
    return (
      <View>
        <Title />
        <Time />
        <NewEventButton />
        <FooterHome />
      </View>
    )
  }
}
