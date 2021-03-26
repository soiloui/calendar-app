import React, { useState, useEffect } from 'react';
import StyledCalendarSummary from '../styled-components/StyledCalendarSummary';
import Table from './Table';
import Loader from './Loader';

import { CalendarEvent } from '../api-client';
import { fetchCalendarEvents } from '../utlis';

const CalendarSummary: React.FC = () => {
  const [calendarDays, setCalendarDays] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);
  const currentDate: Date = new Date();

  // getting events data when mounted
  useEffect(() => {
    fetchCalendarEvents(7, currentDate)
      .then((response: Array<CalendarEvent[]>) => {
        setCalendarDays(response);
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);


  return (
    <StyledCalendarSummary>
      <h2>Calendar summary</h2>

      {isLoading
        ? <Loader />
        : isError
          ? <p className="error-message">Something went wrong. Please try again later.</p>
          : <Table calendarDays={calendarDays} currentDate={currentDate} />
      }
    </StyledCalendarSummary>
  );
};

export default CalendarSummary;