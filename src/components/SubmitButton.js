import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function SubmitButton() {
  return (
    <Link to={'/'}>
      <Text>Submit</Text>
    </Link>
  )
}
