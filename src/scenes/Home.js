import React from 'react';
import { View } from 'react-native';

import Title from '../components/Title';
import Time from '../components/Time';
import ElapsedTime from '../components/ElapsedTime';
import NewEventButton from '../components/NewEventButton';
import FooterHome from '../components/FooterHome';

export default function Home() {
  return (
    <View>
      <Title />
      <Time />
      <NewEventButton />
      <FooterHome />
    </View>
  )
}

/*
{ store.currentEventId ? <ElapsedTime /> : <Time /> }
*/

