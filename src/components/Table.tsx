import React from 'react';
import StyledTable from '../styled-components/StyledTable';
import { getCalendarDate, getCompactDate } from '../utlis';

interface TableProps {
  currentDate: Date;
  calendarDays: [][];
}

const Table: React.FC<TableProps> = ({ currentDate, calendarDays }) => {
  let numberOfEventsSummary: number = 0;
  let totalDurationSummary: number = 0;
  const longestEventsSummary: string[] = [];

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
          {calendarDays.map((day: any[], index: number) => {
            // adding up the druation of tasks for the day
            const totalDayDuration: number = day.reduce((acc, day) => {
              return acc + day.durationInMinutes;
            }, 0);

            // sort array by title length
            const titleSortedDay = day.sort((a: any, b: any) => {
              return b.title.length - a.title.length
            })[0].title;

            // adding day duration / events / longest event to week summary
            totalDurationSummary += totalDayDuration;
            numberOfEventsSummary += day.length;
            longestEventsSummary.push(titleSortedDay);

            return (
              <tr key={index}>
                <td>{getCompactDate(getCalendarDate(currentDate, index))}</td>
                <td>{day.length}</td>
                <td>{totalDayDuration}</td>
                <td>
                  {titleSortedDay}
                  0
                </td>
              </tr>
            )
          })}

          <tr className="summary">
            <td>Total</td>
            <td>{numberOfEventsSummary}</td>
            <td>{totalDurationSummary}</td>
            <td>
              {longestEventsSummary.sort((a: any, b: any) => b.length - a.length)[0]}
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table
