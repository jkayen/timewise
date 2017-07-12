import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function SettingsButton() {
  return (
    <Link to={'/settings'}>
      <Text>Settings</Text>
    </Link>
  )
}
