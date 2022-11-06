import React from 'react';
import styled from 'styled-components';
import BoardInfo from '../components/UIs/BoardInfo';
import Nav from '../components/Nav';
import ManageBody from '../components/ManageBody';

function AdManagement() {
  return (
    <S.AdManagement>
      <Nav text="로그인 정보" />
      <BoardInfo text="광고관리" />
      <ManageBody />
    </S.AdManagement>
  );
}

const S = {
  AdManagement: styled.div`
    width: 65rem;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};

export default AdManagement;
