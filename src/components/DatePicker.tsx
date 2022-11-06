import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { getThisWeek } from '../utils/getFormatDate';

interface Props {
  getSelectedDate: (startDate: Date, endDate: Date) => void;
}

function DatePickerForm({ getSelectedDate }: Props) {
  const [startDate, setStartDate] = useState(new Date('2022/02/01'));
  const [endDate, setEndDate] = useState(new Date('2022/02/10'));

  //   console.log('getThisWeek :>> ', getThisWeek());

  useEffect(() => {
    getSelectedDate(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <S.DatePickerContainer>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date || new Date())}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date || new Date())}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </S.DatePickerContainer>
  );
}

const S = {
  DatePickerContainer: styled.div`
    & {
      display: flex;
      position: absolute;
      right: 0;
    }
  `,
};

export default DatePickerForm;
