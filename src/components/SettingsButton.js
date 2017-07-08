import React from 'react';
import { Button } from 'react-native';

export default function SettingsButton() {
  return (
    <Button
      title="Settings"
      onPress={()=>console.log("success")}
    />
  )
}
