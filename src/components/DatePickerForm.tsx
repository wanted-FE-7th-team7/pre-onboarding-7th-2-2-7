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
        className="date-picker"
        selected={new Date(start)}
        onChange={date =>
          setDate({ start: dayjs(date).format('YYYY-MM-DD'), end })
        }
        selectsStart
        startDate={new Date(start)}
        endDate={new Date(end)}
        dateFormat="yyyy년 MM월 dd일"
      />
      <div className="separator">~</div>
      <DatePicker
        className="date-picker"
        selected={new Date(end)}
        onChange={date =>
          setDate({ start, end: dayjs(date).format('YYYY-MM-DD') })
        }
        selectsEnd
        startDate={new Date(start)}
        endDate={new Date(end)}
        minDate={new Date(start)}
        dateFormat="yyyy년 MM월 dd일"
      />
    </S.DatePickerContainer>
  );
}

const S = {
  DatePickerContainer: styled.div`
    & {
      display: flex;
      align-items: center;
      gap: 1rem;

      .date-picker {
        all: unset;
        font-size: 1.4rem;
        cursor: pointer;
      }

      .separator {
        font-size: 1.4rem;
      }
    }
  `,
};

export default DatePickerForm;
