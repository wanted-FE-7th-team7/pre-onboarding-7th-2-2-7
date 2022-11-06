import React from 'react';
import styled from 'styled-components';
import ManageItem from './UIs/ManageItem';

function ManageBody() {
  return (
    <S.ManageBody>
      <ManageItem />
    </S.ManageBody>
  );
}

const S = {
  ManageBody: styled.div`
    background-color: gray;
    width: 65rem;
    height: 70vh;
  `,
};

export default ManageBody;
