import { AsyncStorage } from 'react-native';

export default function getActivities() {
  return AsyncStorage.getItem('activities')
}
