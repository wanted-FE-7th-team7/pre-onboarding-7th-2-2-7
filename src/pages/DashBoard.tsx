import React, { useState } from 'react';
import DatePickerForm from '../components/DatePicker';
import { MultiChart } from '../components/MultiChart';
import useData from '../hooks/useData';

function DashBoard() {
  const [startDate, setStartDate] = useState(new Date('2022/02/01'));
  const [endDate, setEndDate] = useState(new Date('2022/02/02'));

  const { selectedData } = useData({ startDate, endDate });
  const getSelectedDate = (startDate: Date, endDate: Date) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div>
      <DatePickerForm getSelectedDate={getSelectedDate} />
      <MultiChart data={selectedData} />
    </div>
  );
}

export default DashBoard;
