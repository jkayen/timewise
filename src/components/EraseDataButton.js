import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import eraseDatabase from '../database/eraseDatabase';

export default function SettingsButton() {
  return (
    <View style={styles.container}>
    <Button
      onPress={eraseDatabase}
      title="Reset timewise."
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
})
