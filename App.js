if (__DEV__) {
  require('./src/dev/ReactotronConfig');
  const Reactotron = require('reactotron-react-native').default;
  Reactotron.log('***Reactotron reconnected***');
}

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Home from './src/scenes/Home';
import Prompt from './src/scenes/Prompt';
import Analysis from './src/scenes/Analysis';
import Settings from './src/scenes/Settings';

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Route exact path = "/" component={Home} />
        <Route path = "/prompt" component={Prompt} />
        <Route path = "/analysis" component={Analysis} />
        <Route path = "/settings" component={Settings} />
      </View>
    </NativeRouter>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// <View style={styles.container}>
