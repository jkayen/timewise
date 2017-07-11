import { AsyncStorage } from 'react-native';

export default function setEvent(activityName, newEventStartTime) {
  return AsyncStorage.setItem(
    JSON.stringify(newEventStartTime),
    JSON.stringify({
      activityName,
      start: newEventStartTime,
      nextEvent: null
    })
  );
}
