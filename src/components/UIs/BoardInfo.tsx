import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

function BoardInfo({ text }: Props) {
  return <S.DashBoard>{text}</S.DashBoard>;
}

const S = {
  DashBoard: styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 5rem;
  `,
};

export default BoardInfo;
