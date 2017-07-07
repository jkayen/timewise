import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function ReturnHome() {
  return (
    <Link to={'/'}>
      <Text>Okay, got it.</Text>
    </Link>
  )
}
