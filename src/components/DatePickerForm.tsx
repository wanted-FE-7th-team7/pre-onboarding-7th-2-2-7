import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { useTrendsDateRangeState } from '../store/trend.recoil';

function DatePickerForm() {
  const [{ start, end }, setDate] = useTrendsDateRangeState();

  return (
    <S.DatePickerContainer>
      <DatePicker
        selected={new Date(start)}
        onChange={date =>
          setDate({ start: dayjs(date).format('YYYY-MM-DD'), end })
        }
        selectsStart
        startDate={new Date(start)}
        endDate={new Date(end)}
      />
      <DatePicker
        selected={new Date(end)}
        onChange={date =>
          setDate({ start, end: dayjs(date).format('YYYY-MM-DD') })
        }
        selectsEnd
        startDate={new Date(start)}
        endDate={new Date(end)}
        minDate={new Date(start)}
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
