import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';

export default function App() {
  return (
    <Text>This is working</Text>
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
