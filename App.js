import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Home from './src/scenes/Home';
import Prompt from './src/scenes/Prompt';

export default function App() {
  return (
    <NativeRouter>
      <View>
        <Route exact path ="/" component={Home} />
        <Route path = "/prompt" component={Prompt} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// <View style={styles.container}>
