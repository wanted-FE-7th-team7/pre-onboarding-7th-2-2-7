import React from 'react';
import styled from 'styled-components';
import ComparedTrends from '../components/ComparedTrends';
import DatePickerForm from '../components/DatePickerForm';
import { MultiChart } from '../components/MultiChart';

function DashboardPage() {
  return (
    <S.Main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <S.Header>
          <div className="dashboard-title">대시보드</div>
          <DatePickerForm />
        </S.Header>
        <section>
          <S.SubHeader>통합 광고 현황</S.SubHeader>
          <S.Section>
            <ComparedTrends />
            <MultiChart />
          </S.Section>
        </section>
      </React.Suspense>
    </S.Main>
  );
}

export default DashboardPage;

const S = {
  Main: styled.main`
    padding: 4rem;
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    padding: 4.4rem;
  `,

  Header: styled.header`
    & {
      .dashboard-title {
        height: 3rem;
        font-size: 2.6rem;
        font-weight: 900;
      }

      margin-bottom: 4.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,

  SubHeader: styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
    color: #3a474e;
    padding-bottom: 2rem;
  `,
};
