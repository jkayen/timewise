import React from 'react';
import { View } from 'react-native';

import Title from '../components/Title';
import Time from '../components/Time';
import InitialPrompt from '../components/InitialPrompt';
import FooterHome from '../components/FooterHome';

export default function Home() {
  return (
    <View>
      <Title />
      <Time />
      <InitialPrompt />
      <FooterHome />
    </View>
  )
}
