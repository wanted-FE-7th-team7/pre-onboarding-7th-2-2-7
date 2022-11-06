import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  amount: number;
  rate: number;
}

function DashboardItem({ title, amount, rate }: Props) {
  return (
    <S.DashboardItem>
      <div className="status-title">{title}</div>
      <div className="status-content">
        <div>{amount}%</div>
        <div>{rate}</div>
      </div>
    </S.DashboardItem>
  );
}

const S = {
  DashboardItem: styled.div`
    background-color: wheat;
    width: 304px;
    height: 79px;
    padding: 1rem;

    background: #ffffff;
    border: 0.5px solid #edeff1;
    border-radius: 10px;

    .status-title {
      margin-bottom: 1rem;
      font-weight: 700;
      opacity: 0.3;
    }

    .status-content {
      display: flex;
      justify-content: space-between;
    }
  `,
};

export default DashboardItem;
