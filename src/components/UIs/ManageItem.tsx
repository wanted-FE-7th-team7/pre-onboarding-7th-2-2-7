import React from 'react';
import styled from 'styled-components';

function ManageItem() {
  return <S.ManageItem>ManageItem</S.ManageItem>;
}

const S = {
  ManageItem: styled.div`
    background-color: wheat;
    width: 10rem;
    height: 15rem;
    border-radius: 1rem;

    margin: 1rem;
    padding: 1rem;
  `,
};

export default ManageItem;
