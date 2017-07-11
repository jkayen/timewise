import { AsyncStorage } from 'react-native';

import getActivities from './helpers/getActivities';
import setActivities from './helpers/setActivities';
import setEvent from './helpers/setEvent';
import getCurrentEvent from './helpers/getCurrentEvent';
import getEvent from './helpers/getEvent';
import updateEvent from './helpers/updateEvent';
import updateActivities from './helpers/updateActivities';
import setCurrentEvent from './helpers/setCurrentEvent';

// NOTE: In the database, the key for each event is a number that is also the start time for that event.

export default function addToDatabase (activityName, newEventStartTime = Date.now()) {
  // check for activities object
  return getActivities()
  // if activity not listed in activities object or activities object not yet created, add new activity
  .then(activitiesObj => setActivities(activitiesObj, activityName))
    // create new event
  .then(() => setEvent(activityName, newEventStartTime))
  // check for current event
  .then(getCurrentEvent)
  // get eventObj of the currentEvent only if there is one
  .then(getEvent)
  // update the nextEvent of the just completed event if there was a preceding event and return the updated event object
  .then(currentEventObj => updateEvent(currentEventObj, newEventStartTime))
  // calculate duration of that event and add it to the activities array, only if something
  .then(updateActivities)
  // update currentEvent key to the newly created event
  .then(() => setCurrentEvent(newEventStartTime))
}
