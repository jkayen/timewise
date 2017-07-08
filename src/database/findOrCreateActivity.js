import { AsyncStorage } from 'react-native';

export default function findOrCreateActivity(name) {
  // check for activity in database
  return AsyncStorage.getItem(name)
  .then(alreadyCreatedActivity => {
    // create activity if not already created, with duration value at 0
    if (!alreadyCreatedActivity) {
      return AsyncStorage.setItem(name, JSON.stringify(0))
      // check if activities array exists
      .then(() => {
        return AsyncStorage.getItem('activities')
      })
      .then(activitiesArray => {
        // create activities array in db if not already extant
        if (!activitiesArray) {
          return AsyncStorage.setItem('activities', JSON.stringify([name]))
        // otherwise, add new activity to activities array
        } else {
          return AsyncStorage.mergeItem('activities', JSON.stringify([name]))
        }
      })
    }
  })
}
