import React, { useState, useEffect } from 'react';
import StyledCalendarSummary from '../styled-components/StyledCalendarSummary';
import Table from './Table';
import Loader from './Loader';

import getCalendarEvents from '../api-client';
import { getCalendarDate } from '../utlis';

const CalendarSummary: React.FC = () => {
  const [calendarDays, setCalendarDays] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const currentDate: Date = new Date;

  // getting events data when mounted
  useEffect(() => {
    async function fetchCalendarEvents() {
      for (let i = 0; i < 7; i++) {
        let response = await getCalendarEvents(getCalendarDate(currentDate, i));

        setCalendarDays((prev) => {
          return [...prev, response]
        });

        if (i === 6) setIsLoading(false);
      }
    }

    fetchCalendarEvents()
  }, []);

  return (
    <StyledCalendarSummary>
      <h2>Calendar summary</h2>

      {isLoading
        ? <Loader />
        : <Table calendarDays={calendarDays} currentDate={currentDate} />
      }
    </StyledCalendarSummary>
  );
};

export default CalendarSummary;