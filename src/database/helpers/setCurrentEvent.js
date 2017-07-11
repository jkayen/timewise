import { AsyncStorage } from 'react-native';

export default function setCurrentEvent(newEventStartTime) {
  return AsyncStorage.setItem(
    'currentEvent',
    JSON.stringify(newEventStartTime)
  )
}
