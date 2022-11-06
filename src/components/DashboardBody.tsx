import React from 'react';
import styled from 'styled-components';
import DashboardItem from './UIs/DashboardItem';
import StatusBlock from '../components/UIs/DashboardItem';

function DashboardBody() {
  return (
    <S.DashboardBody>
      <DashboardItem title="제목" amount={60} rate={56} />
    </S.DashboardBody>
  );
}

const S = {
  DashboardBody: styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    padding: 3rem;
  `,
};

export default DashboardBody;
