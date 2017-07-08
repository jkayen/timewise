import { AsyncStorage } from 'react-native';

import findOrCreateActivity from './findOrCreateActivity';

export default function createNewEvent (activityName, start = Date.now()) {
  // check or add activity
  findOrCreateActivity(activityName)
  // create new event
  .then(() => {
    AsyncStorage.setItem(JSON.stringify(newEvent.start), JSON.stringify({activityName, start, nextEvent: null}));
  })
  // check for current event
  .then(() => {
    return AsyncStorage.getItem('currentEvent')
  })
  .then(eventId => {
    // create currentEvent key with newly created event if none exists
    if (!eventId) {
      AsyncStorage.setItem('currentEvent', JSON.stringify(start))
    } else {
      // otherwise, access previously current event
      return AsyncStorage.getItem(eventId)
      // set new even as nextEvent to previously current event
      .then(event => {
        AsyncStorage.mergeItem(JSON.stringify(JSON.parse(event).start), JSON.stringify({nextEvent: start}))
      })
      // update currentEvent key to the newly created event
      .then(() => {
        AsyncStorage.setItem('currentEvent', JSON.stringify(start))
      })
    }
  })
}
