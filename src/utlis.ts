// a function that allows to return a date with the desired number of extended days
export const getDate = (date: Date, days: number): Date => {
  const eventDate = new Date(date);
  eventDate.setDate(eventDate.getDate() + days);
  return eventDate
}

// returns compact string of provided date in format YYYY-MM-DD
export const getCompactDate = (date: Date): string => date.toISOString().split('T')[0];