import React from 'react';
import styled from 'styled-components';
import { useComparedTrendsState } from '../store/trend.recoil';

const TrendCard = ({
  title,
  value,
}: {
  title: string;
  value: { current: number; before: number; symbol: string };
}) => (
  <S.Card>
    <S.CardHeader>
      <h3>{title}</h3>
      <p>
        {value.current}
        {value.symbol}
      </p>
    </S.CardHeader>
    <S.CardValue>
      <div>{value.current - value.before < 0 ? '↓' : '↑'}</div>
      <div>{Math.abs(value.current - value.before)}</div>
    </S.CardValue>
  </S.Card>
);

function ComparedTrends() {
  const { before, current } = useComparedTrendsState();

  const data = {
    ROAS: {
      before: before.reduce((prev, cur) => cur.roas + prev, 0),
      current: current.reduce((prev, cur) => cur.roas + prev, 0) / 100,
      symbol: '%',
    },

    광고비: {
      before: before.reduce((prev, cur) => cur.cost + prev, 0),
      current: current.reduce((prev, cur) => cur.cost + prev, 0) / 10000,
      symbol: '만 원',
    },

    노출수: {
      before: before.reduce((prev, cur) => cur.imp + prev, 0),
      current: current.reduce((prev, cur) => cur.imp + prev, 0) / 10000,
      symbol: '만 회',
    },

    클릭수: {
      before: before.reduce((prev, cur) => cur.click + prev, 0),
      current: current.reduce((prev, cur) => cur.click + prev, 0) / 10000,
      symbol: '만 회',
    },

    전환수: {
      before: before.reduce((prev, cur) => cur.conv + prev, 0),
      current: current.reduce((prev, cur) => cur.conv + prev, 0) / 10000,
      symbol: '만 회',
    },

    매출: {
      before: before.reduce((prev, cur) => cur.convValue + prev, 0),
      current:
        current.reduce((prev, cur) => cur.convValue + prev, 0) / 100000000,
      symbol: '억 원',
    },
  };

  return (
    <S.Table>
      {Object.entries(data).map(item => (
        <TrendCard title={item[0]} value={item[1]} key={item[0]} />
      ))}
    </S.Table>
  );
}

const S = {
  Table: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  `,

  Card: styled.span`
    width: 30.4rem;
    height: 7.9rem;
    display: flex;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.1rem;
    padding: 1.8rem;
    justify-content: space-between;
    align-items: center;
  `,

  CardTitle: styled.h3`
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;

    color: #94a2ad;
  `,

  CardHeader: styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  `,

  CardValue: styled.div`
    display: flex;
    font-size: 1.2rem;
  `,
};

export default ComparedTrends;
