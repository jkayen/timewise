import { AsyncStorage } from 'react-native';

export default function getEvent(eventId) {
  if (eventId) {
    return AsyncStorage.getItem(eventId);
  }
}
