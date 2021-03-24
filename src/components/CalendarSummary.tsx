import React, { useState, useEffect } from 'react';
import StyledCalendarSummary from '../styled-components/StyledCalendarSummary';
import Table from './Table';
import Loader from './Loader';

import getCalendarEvents from '../api-client';
import { getDate } from '../utlis';

const CalendarSummary: React.FC = () => {
  const [calendarDays, setCalendarDays] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const currentDate: Date = new Date;

  // getting events data when mounted
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      getCalendarEvents(getDate(currentDate, i))
        .then(data => {
          setCalendarDays((prev) => {
            return [...prev, data]
          });

          if (i === 6) setIsLoading(false);
        });
    }
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