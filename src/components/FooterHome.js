import React from 'react';
import { View } from 'react-native';

import AnalysisButton from './AnalysisButton';
import SettingsButton from './SettingsButton';

export default function FooterHome() {
  return (
    <View>
      <AnalysisButton />
      <SettingsButton />
    </View>
  )
}
