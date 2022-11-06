import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
  useFilteredTrendsValue,
  useTrendsSelectsState,
} from '../store/trend.recoil';
import styled from 'styled-components';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export function MultiChart() {
  const data = useFilteredTrendsValue();
  const [selects, setSelects] = useTrendsSelectsState();

  const [labels, setLabels] = useState(data.map(data => data.date));
  const [roas, setRoas] = useState(data.map(data => data.roas));
  const [cost, setCost] = useState(data.map(data => data.cost));
  const [imp, setImp] = useState(data.map(data => data.imp));
  const [click, setClick] = useState(data.map(data => data.click));
  const [conv, setConv] = useState(data.map(data => data.conv));
  const [convValue, setConvValue] = useState(data.map(data => data.convValue));

  const getData = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        return roas;
      case 'cost':
        return cost;
      case 'imp':
        return imp;
      case 'click':
        return click;
      case 'conv':
        return conv;
      case 'convValue':
        return convValue;
      default:
        return new Error('알 수 없는 값입니다.');
    }
  };

  const [showData, setShowData] = useState(getData(selects[0]));
  const [showDataSecond, setShowDataSecond] = useState(getData(selects[1]));

  const dataSet = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        borderColor: 'rgb(36, 141, 238)',
        borderWidth: 1,
        fill: false,
        data: showData,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        borderColor: 'rgb(13, 184, 42)',
        borderWidth: 1,
        fill: false,
        data: showDataSecond,
        yAxisID: 'y1',
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  useEffect(() => {
    setLabels(data.map(data => data.date));
    setRoas(data.map(data => data.roas));
    setCost(data.map(data => data.cost));
    setImp(data.map(data => data.imp));
    setClick(data.map(data => data.click));
    setConv(data.map(data => data.conv));
    setConvValue(data.map(data => data.convValue));

    onChangeSelectFirst(selects[0]);
    onChangeSelectFirst(selects[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onChangeSelectFirst = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        setShowData(roas);
        break;
      case 'cost':
        setShowData(cost);
        break;
      case 'imp':
        setShowData(imp);
        break;
      case 'click':
        setShowData(click);
        break;
      case 'conv':
        setShowData(conv);
        break;
      case 'convValue':
        setShowData(convValue);
        break;
      default:
        return new Error('알 수 없는 값입니다.');
    }
    setSelects(selects => [selectedOption, selects[1]]);
  };

  const onChangeSelectSecond = (selectedOption: string) => {
    switch (selectedOption) {
      case 'roas':
        setShowDataSecond(roas);
        break;
      case 'cost':
        setShowDataSecond(cost);
        break;
      case 'imp':
        setShowDataSecond(imp);
        break;
      case 'click':
        setShowDataSecond(click);
        break;
      case 'conv':
        setShowDataSecond(conv);
        break;
      case 'convValue':
        setShowDataSecond(convValue);
        break;
      case '':
        setShowDataSecond([]);
        break;
      default:
        return new Error('알 수 없는 값입니다.');
    }
    setSelects(selects => [selects[0], selectedOption]);
  };

  return (
    <>
      <S.Selection>
        <select
          onChange={e => onChangeSelectFirst(e.target.value)}
          value={selects[0]}
        >
          <option value="roas">ROAS</option>
          <option value="cost">광고비</option>
          <option value="imp">노출수</option>
          <option value="click">클릭수</option>
          <option value="conv">전환수</option>
          <option value="convValue">매출</option>
        </select>
        <select
          onChange={e => onChangeSelectSecond(e.target.value)}
          value={selects[1]}
        >
          <option value="">선택안함</option>
          <option value="roas">ROAS</option>
          <option value="cost">광고비</option>
          <option value="imp">노출수</option>
          <option value="click">클릭수</option>
          <option value="conv">전환수</option>
          <option value="convValue">매출</option>
        </select>
      </S.Selection>
      <Chart type="bar" data={dataSet} options={options} />
    </>
  );
}

const S = {
  Selection: styled.div`
    & {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;

      & > select {
        all: unset;
        cursor: pointer;
        border-radius: 1rem;
        border-style: solid;
        border-width: 0.1rem;
        border-color: #d1d8dc;
        padding: 1rem;
        min-width: 5rem;
      }
    }
  `,
};
