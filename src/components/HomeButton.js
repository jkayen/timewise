import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function HomeButton() {
  return (
    <Link to={'/'}>
      <Text>Home</Text>
    </Link>
  )
}
