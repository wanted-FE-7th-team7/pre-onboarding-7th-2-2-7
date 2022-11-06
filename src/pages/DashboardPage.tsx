import React from 'react';
import styled from 'styled-components';
import BoardInfo from '../components/BoardInfo';
import DashboardBody from '../components/DashboardBody';
import Nav from '../components/Nav';

function AdStatusPage() {
  return (
    <S.AdStatusPage>
      <Nav />
      <BoardInfo text="대시보드" />
      <div className="dash-title">통합 광고 현황</div>
      <DashboardBody />
    </S.AdStatusPage>
  );
}

const S = {
  AdStatusPage: styled.div`
    width: 100rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1rem;

    background-color: #f6f7f8;

    .dash-title {
      font-size: 3rem;
      font-weight: 700;
      color: #3a474e;
    }
  `,
};

export default AdStatusPage;
