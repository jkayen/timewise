import { AsyncStorage } from 'react-native';

export default function getCurrentEvent() {
  return AsyncStorage.getItem('currentEvent');
}
