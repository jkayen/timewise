import { AsyncStorage } from 'react-native';

import checkActivity from './checkActivity';

// NOTE: In the database, the key for each event is a number that is also the start time for that event.

export default function createNewEvent (activityName, newEventStartTime = Date.now()) {
  // check or add activity to activities object
  return checkActivity(activityName)
  // create new event
  .then(() => {
    return AsyncStorage.setItem(JSON.stringify(newEventStartTime), JSON.stringify({activityName, start: newEventStartTime, nextEvent: null}));
  })
  // check for current event
  .then(() => {
    return AsyncStorage.getItem('currentEvent')
  })
  // get eventObj of the currentEvent only if there is one
  .then(eventId => {
    // // create currentEvent key with newly created event if none exists
    // if (!eventId) {
    //   AsyncStorage.setItem('currentEvent', JSON.stringify(newEventStartTime));
    //   return undefined;
    // } else {
    //   // otherwise, access previously current event
    //   return AsyncStorage.getItem(eventId);
    // }
    if (eventId) {
      return AsyncStorage.getItem(eventId);
    }
  })
  // update the nextEvent of the just completed event if there was a preceding event
  .then(currentEventObj => {
    if (currentEventObj) {
      let currentEventName = JSON.stringify(JSON.parse(currentEventObj).start);
      let currentEventObjParsed = JSON.parse(currentEventObj);
      currentEventObjParsed.nextEvent = newEventStartTime;
      let updatedCurrentEventObj = JSON.stringify(currentEventObjParsed);
      return AsyncStorage.setItem(currentEventName, updatedCurrentEventObj)
    }
  })
  // get updated current event
  .then(() => {
    return AsyncStorage.getItem('currentEvent')
  })
  .then(currentEventId => {
    return AsyncStorage.getItem(currentEventId)
  })
  // calculate duration of that event and add it to the activities array, only if something
  .then(currentEventObj => {
    if (currentEventObj) {
      let updatedCurrentEventObjParsed = JSON.parse(currentEventObj);
      let activityId = updatedCurrentEventObjParsed.activityName;
      let addedTime = updatedCurrentEventObjParsed.nextEvent - updatedCurrentEventObjParsed.start;
      return AsyncStorage.getItem('activities')
      .then(activitiesObj => {
        let activitiesObjParsed = JSON.parse(activitiesObj);
        activitiesObjParsed[activityId] += addedTime;
        let updatedActivitiesObj = JSON.stringify(activitiesObjParsed);
        return AsyncStorage.setItem('activities', updatedActivitiesObj);
      })
    }
  })
  // update currentEvent key to the newly created event
  .then(() => {
    return AsyncStorage.setItem('currentEvent', JSON.stringify(newEventStartTime))
  })
}
