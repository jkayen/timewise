import React from 'react';
import { Button, AsyncStorage } from 'react-native';


export default function SettingsButton() {
  return (
    <Button
      title="Settings"
      onPress={()=>AsyncStorage.clear()}
    />
  )
}
