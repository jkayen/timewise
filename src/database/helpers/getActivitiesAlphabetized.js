import getActivities from './getActivities';

// get the complete list of activities that have been listed and return in them as an array of the activity names in alphabetical order

export default function getActivitiesAlphabetized() {
  return getActivities()
  .then(activitiesObj => {
    if (activitiesObj) {
      return  Object.keys(JSON.parse(activitiesObj)).sort();
    }
  })
}
