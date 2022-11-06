import React from 'react';
import styled from 'styled-components';
import BoardInfo from '../components/BoardInfo';
import Nav from '../components/Nav';
import ManageBody from '../components/ManageBody';

function AdManagement() {
  return (
    <S.AdManagement>
      <Nav />
      <BoardInfo text="광고관리" />
      <ManageBody />
    </S.AdManagement>
  );
}

const S = {
  AdManagement: styled.div`
    width: 100rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 1rem;

    background-color: #f6f7f8;
  `,
};

export default AdManagement;
