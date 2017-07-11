import { AsyncStorage } from 'react-native';

export default function updateEvent(currentEventObj, newEventStartTime) {
  if (currentEventObj) {
    let currentEventObjParsed = JSON.parse(currentEventObj);
    let currentEventName = JSON.stringify(currentEventObjParsed.start);
    currentEventObjParsed.nextEvent = newEventStartTime;
    let updatedCurrentEventObj = JSON.stringify(currentEventObjParsed);
    AsyncStorage.setItem(currentEventName, updatedCurrentEventObj);
    return currentEventObjParsed;
  }
}
