import React from 'react';
import { Text, Button } from 'react-native';
import { Link } from 'react-router-native';

export default function SubmitButton() {
  return (
    <Button
      title="Submit"
      onPress={()=>console.log('setdata')}
    />
  )
}

// NEED TO REMOVE LINK FROM THIS AND MAKE A SEPARATE BUTTON TO GO HOME AFTER SUBMITTING ACTIVITY
