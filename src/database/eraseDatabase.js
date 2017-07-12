import { AsyncStorage } from 'react-native';

export default function eraseDatabase() {
  return AsyncStorage.clear()
}
