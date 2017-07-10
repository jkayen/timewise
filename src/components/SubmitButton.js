import React from 'react';
import { Button } from 'react-native';

import createNewEvent from '../database/createNewEvent';

export default function SubmitButton() {
  return (
    <Button
      title="Submit"
      onPress={() => createNewEvent('watching tv')}
    />
  )
}
