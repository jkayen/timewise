import { AsyncStorage } from 'react-native';

import getActivities from './getActivities';

export default function updateActivities(updatedCurrentEventObjParsed) {
  if (updatedCurrentEventObjParsed) {
    let activityId = updatedCurrentEventObjParsed.activityName;
    let addedTime = updatedCurrentEventObjParsed.nextEvent - updatedCurrentEventObjParsed.start;
    getActivities()
    .then(activitiesObj => {
      let activitiesObjParsed = JSON.parse(activitiesObj);
      activitiesObjParsed[activityId] += addedTime;
      let updatedActivitiesObj = JSON.stringify(activitiesObjParsed);
      return AsyncStorage.setItem(
        'activities',
        updatedActivitiesObj
      );
    })
  }
}
