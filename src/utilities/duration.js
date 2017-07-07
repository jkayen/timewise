import { AsyncStorage } from 'react-native';

export default function activitiesByTime() {
  // return AsyncStorage.getAllKeys()
  // .then(keys => {
  //   return AsyncStorage.multiGet(keys)
  // })
  // .then(stores => {
  //   let obj = {};
  //   let arr = [];
  //   stores.forEach(kV => {
  //     let v = JSON.parse(kV[1]);
  //     if (v.name) {
  //       obj[v.name] ? obj[v.name] += v.duration : obj[v.name] = v.duration;
  //     }
  //   })
  //   for (let e in obj) {
  //     arr.push({name: e, duration: obj[e]})
  //   }
  //   arr = arr.sort((a, b) => b.duration - a.duration);
  //   return arr;
  // })
  return [{name: 'Typing', duration: 100, key: 0}, {name: 'Cooking', duration: 50, key: 1}];
}
