function dateObj(d: string) {
  let parts;

  if (d) {
    parts = d.split(":");
  }

  let date = new Date();
  if (parts) {
    date.setHours(Number(parts[0]));
    date.setMinutes(Number(parts[1]));
  }
  return date;
}

const checkIsLessonActive = (
  timeFrom: string,
  timeTo: string,
  dayOfWeek: number
) => {
  let date = new Date();
  let currentDay = date.getDay();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentDay - 1 !== Number(dayOfWeek)) return false;

  if (
    dateObj(currentHour + ":" + currentMinutes) >= dateObj(timeFrom) &&
    dateObj(currentHour + ":" + currentMinutes) <= dateObj(timeTo)
  )
    return true;

  return false;
};

export default checkIsLessonActive;
