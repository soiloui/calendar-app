// return a date object with the desired number of extended days
export const getCalendarDate = (date: Date, days: number): Date => {
  const eventDate = new Date(date);
  eventDate.setDate(eventDate.getDate() + days);
  return eventDate
}

// returns compact string of provided date in YYYY-MM-DD format
export const getCompactDate = (date: Date): string => date.toISOString().split('T')[0];