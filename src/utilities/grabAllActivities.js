import { AsyncStorage } from 'react-native';

// get the complete list of activities that have been listed and return in them as an array of the activity names in alphabetical order

export default function grabAllActivities() {
  return AsyncStorage.getItem('activities')
  .then(activitiesObj => {
    if (activitiesObj) {
      return  Object.keys(JSON.parse(activitiesObj)).sort();
    }
  })
}
