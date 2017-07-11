import { AsyncStorage } from 'react-native';

export default function checkActivity(activityName) {
  // check for activity in database
  return AsyncStorage.getItem('activities').then(activitiesObj => {
    // if activities object not yet created in database:
    if (!activitiesObj) {
      return AsyncStorage.setItem('activities', JSON.stringify({[activityName]: 0}))
    // create activity if not already in the activities object, with duration value at 0
    } else if (!JSON.parse(activitiesObj).activityName) {
      let activitiesObjParsed = JSON.parse(activitiesObj);
      activitiesObjParsed[activityName] = 0;
      return AsyncStorage.setItem('activities', JSON.stringify(activitiesObjParsed));
    }
  })
}
