import React from 'react';
import styled from 'styled-components';
import DashBoard from '../components/UIs/BoardInfo';
import Nav from '../components/Nav';
import StatusBlock from '../components/UIs/DashboardItem';

function AdStatusPage() {
  return (
    <S.AdStatusPage>
      <Nav text="로그인 정보" />
      <DashBoard text="대시보드" />
      <div>통합 광고 현황</div>
      <StatusBlock title="제목" amount={60} rate={56} />
    </S.AdStatusPage>
  );
}

const S = {
  AdStatusPage: styled.div`
    background-color: gray;
    width: 65rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};

export default AdStatusPage;
