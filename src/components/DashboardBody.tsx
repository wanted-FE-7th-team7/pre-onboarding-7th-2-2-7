import React from 'react';
import styled from 'styled-components';
import AdItem from './UIs/ManageItem';

function DashboardBody() {
  return (
    <S.DashboardBody>
      <AdItem />
    </S.DashboardBody>
  );
}

const S = {
  DashboardBody: styled.div`
    background-color: gray;
    width: 65rem;
    height: 70vh;
  `,
};

export default DashboardBody;
