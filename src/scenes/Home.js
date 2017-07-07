import React from 'react';
import { View } from 'react-native';

import Title from '../components/Title';
import InitialPrompt from '../components/InitialPrompt';
import FooterHome from '../components/FooterHome';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Title />
        <InitialPrompt />
        <FooterHome />
      </View>
    )
  }
}
