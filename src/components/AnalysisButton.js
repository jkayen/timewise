import React from 'react';
import { Text } from 'react-native';
import { Link } from 'react-router-native';

export default function AnalysisButton() {
  return (
    <Link to={'/analysis'}>
      <Text>Analysis</Text>
    </Link>
  )
}
