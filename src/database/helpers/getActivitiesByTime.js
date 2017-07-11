import getActivities from './getActivities';

// get a list of all activities entered as an ordered array with each index being an object of the activity name and the percent of time that activity has been active

export default function getActivitiesByTime() {
  return getActivities()
  .then(activitiesObj => {
    if (activitiesObj) {
      let activitiesSorted = Object.entries(JSON.parse(activitiesObj))
        .sort((a, b) => b[1] - a[1]);
      let totalTime = 0;
      activitiesSorted.forEach(activity => {
        totalTime += activity[1];
      });
      return activitiesSorted.map(activity => ({
        activityName: activity[0],
        percentOfTime: Math.floor(activity[1] / totalTime * 100)
      }))
    }
  })
}
