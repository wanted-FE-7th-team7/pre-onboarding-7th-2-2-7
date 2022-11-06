import React from 'react';
import { useTrendsDateRangeState } from '../store/trend.recoil';

function DashBoardDate() {
  const [date, setDate] = useTrendsDateRangeState();
  return (
    <>
      start
      <input
        type="date"
        value={date.start}
        onChange={({ target: { value } }) => {
          setDate({ ...date, start: value });
        }}
        max={date.end}
      />
      end
      <input
        type="date"
        value={date.end}
        onChange={({ target: { value } }) => {
          setDate({ ...date, end: value });
        }}
        min={date.start}
      />
    </>
  );
}

export default DashBoardDate;
