import React from 'react';
import StyledTable from '../styled-components/StyledTable';
import { getDate, getCompactDate } from '../utlis';

interface TableProps {
  currentDate: Date;
  calendarDays: [][];
}

const Table: React.FC<TableProps> = ({ currentDate, calendarDays }) => {
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
            let totalDuration = day.reduce((acc, day) => {
              return acc + day.durationInMinutes;
            }, 0);

            // creat copy & sort array by title length
            let titleSortedDay = day.sort((a: any, b: any) => {
              return b.title.length - a.title.length
            });

            return (
              <tr key={index}>
                <td>{getCompactDate(getDate(currentDate, index))}</td>
                <td>{day.length}</td>
                <td>{totalDuration}</td>
                <td>
                  {titleSortedDay[0].title}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </StyledTable>
  )
}

export default Table
