export default function timeParser (startTime, endTime) {
  let diff = (endTime - startTime) / 1000;
  let sec, min, hour;
  if (diff > 3599) {
    hour = Math.floor(diff / 3600);
    diff = diff % 3600;
  } if (diff > 59) {
    min = Math.floor(diff / 60);
    diff = diff % 60;
  } if (diff > 1) {
    sec = Math.floor(diff);
  }
  sec = sec ? `${sec} second${sec > 1 ? `s` : ``}` : ``;
  min = min ? `${min} minute${min > 1 ? `s` : ``} ` : ``;
  hour = hour ? `${hour} hour${hour > 1 ? `s` : ``} ` : ``;
  return `${hour}${min}${sec}`;
}
