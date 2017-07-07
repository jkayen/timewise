import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function NewEventButton() {
  return (
    <Link to={`/prompt`}>
      <Text>What are you up to?</Text>
    </Link>
  )
}
