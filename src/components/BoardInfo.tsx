import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

function BoardInfo({ text }: Props) {
  return (
    <S.DashBoard>
      <div className="board-info">{text}</div>
    </S.DashBoard>
  );
}

const S = {
  DashBoard: styled.div`
    background-color: #f6f7f8;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 10rem;
    margin-bottom: 3rem;
    color: #3a474e;

    .board-info {
      font-size: 3rem;
      font-weight: 700;
    }
  `,
};

export default BoardInfo;
