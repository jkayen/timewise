import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function ReturnHomeFromPrompt() {
  return (
    <Link to={'/'}>
      <Text>That's all for now.</Text>
    </Link>
  )
}
