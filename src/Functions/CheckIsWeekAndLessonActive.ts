function dateObj(d: string) {
  var parts = d.split(":");
  console.log(parts[0]);

  let date = new Date();

  date.setHours(Number(parts[0]));
  date.setMinutes(Number(parts[1]));

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

  /*   let startHour = parseInt(timeFrom.substring(0, 2))
	  let endHour = parseInt(timeTo.substring(0, 2))
	  let startMinutes = parseInt(timeFrom.substring(2, 4))
	  let endMinute = parseInt(timeTo.substring(2, 4)) */
  /*    console.log(currentDay - 1 + ' / ' + dayOfWeek); */

  if (currentDay - 1 !== Number(dayOfWeek)) return false;

  if (
    dateObj(currentHour + ":" + currentMinutes) >= dateObj(timeFrom) &&
    dateObj(currentHour + ":" + currentMinutes) <= dateObj(timeTo)
  )
    return true;

  return false;
};

export default checkIsLessonActive;
