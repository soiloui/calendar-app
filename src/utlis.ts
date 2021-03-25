// return a date object with the desired number of extended days
export const getCalendarDate = (date: Date, days: number): Date => {
  const eventDate = new Date(date);
  eventDate.setDate(eventDate.getDate() + days);
  return eventDate
}

// returns compact string of provided date in YYYY-MM-DD format
export const getCompactDate = (date: Date): string => {
  const year = date.getFullYear();
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}