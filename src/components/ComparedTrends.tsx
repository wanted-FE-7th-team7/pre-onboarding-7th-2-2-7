import React from 'react';
import { useComparedTrendsState } from '../store/trend.recoil';

const TrendCard = ({
  title,
  value,
}: {
  title: string;
  value: { current: number; before: number };
}) => (
  <li>
    <div>
      <h3>{title}</h3>
      <p>{value.current}</p>
    </div>
    <div>{value.current - value.before}</div>
  </li>
);

function ComparedTrends() {
  const { before, current } = useComparedTrendsState();

  const data = {
    ROAS: {
      before: before.reduce((prev, cur) => cur.roas + prev, 0),
      current: current.reduce((prev, cur) => cur.roas + prev, 0),
    },

    cost: {
      before: before.reduce((prev, cur) => cur.cost + prev, 0),
      current: current.reduce((prev, cur) => cur.cost + prev, 0),
    },

    conv: {
      before: before.reduce((prev, cur) => cur.conv + prev, 0),
      current: current.reduce((prev, cur) => cur.conv + prev, 0),
    },

    convValue: {
      before: before.reduce((prev, cur) => cur.convValue + prev, 0),
      current: current.reduce((prev, cur) => cur.convValue + prev, 0),
    },

    imp: {
      before: before.reduce((prev, cur) => cur.imp + prev, 0),
      current: current.reduce((prev, cur) => cur.imp + prev, 0),
    },

    click: {
      before: before.reduce((prev, cur) => cur.click + prev, 0),
      current: current.reduce((prev, cur) => cur.click + prev, 0),
    },
  };

  return (
    <ul>
      {Object.entries(data).map(item => (
        <TrendCard title={item[0]} value={item[1]} key={item[0]} />
      ))}
    </ul>
  );
}

export default ComparedTrends;
