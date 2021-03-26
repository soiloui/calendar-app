import React from 'react';
import StyledTable from '../styled-components/StyledTable';

// Utils
import { getCalendarDate, getCompactDate } from '../utlis';

// Types
import { CalendarEvent } from '../api-client';

interface TableProps {
  currentDate: Date;
  calendarDays: Array<CalendarEvent[]>;
}

const Table: React.FC<TableProps> = ({ currentDate, calendarDays }) => {
  let weekNumberOfEvents: number = 0;
  let weekTotalDuration: number = 0;
  const weekLongestTasks: Array<CalendarEvent> = [];

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Number of events</th>
            <th>Total duration [min]</th>
            <th>Longest event</th>
          </tr>
        </thead>
        <tbody>
          {calendarDays.map((day: CalendarEvent[], index: number) => {

            // adding up the druation of tasks for the day
            const dayTotalDuration: number = day.reduce((acc, day) => {
              return acc + day.durationInMinutes;
            }, 0);

            // sort day array by duration time [DESC] & get longest event
            const dayLongestTask = day.sort((a: CalendarEvent, b: CalendarEvent) => {
              return b.durationInMinutes - a.durationInMinutes
            })[0];

            // adding day duration / events / longest event to week summary
            weekTotalDuration += dayTotalDuration;
            weekNumberOfEvents += day.length;
            weekLongestTasks.push(dayLongestTask);

            return (
              <tr key={index}>
                <td>{getCompactDate(getCalendarDate(currentDate, index))}</td>
                <td>{day.length}</td>
                <td>{dayTotalDuration}</td>
                <td>{dayLongestTask.title}</td>
              </tr>
            )
          })}

          <tr className="summary">
            <td>Total</td>
            <td>{weekNumberOfEvents} <span>Events</span></td>
            <td>{weekTotalDuration} <span>Minutes</span></td>
            <td>
              {weekLongestTasks.sort((a: CalendarEvent, b: CalendarEvent) => {
                return b.durationInMinutes - a.durationInMinutes
              })[0].title}
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table
