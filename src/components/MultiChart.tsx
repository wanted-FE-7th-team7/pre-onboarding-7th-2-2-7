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
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Data } from '../hooks/useData';

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

interface Props {
  data: Data[];
}

export function MultiChart({ data }: Props) {
  const [labels, setLabels] = useState(Array<string>);
  const [dataRoas, setDataRoas] = useState(Array<number>);
  const [dataCost, setDataCost] = useState(Array<number>);
  const [dataImp, setDataImp] = useState(Array<number>);
  const [dataClick, setDataClick] = useState(Array<number>);
  const [dataConv, setDataConv] = useState(Array<number>);
  const [dataConvValue, setDataConvValue] = useState(Array<number>);

  const [showData, setShowData] = useState(Array<number>);
  const [showDataScond, setShowDataSecond] = useState(Array<number>);

  const dataSet = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Dataset 1',
        borderColor: 'rgb(36, 141, 238)',
        borderWidth: 1,
        fill: false,
        data: showData,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'Dataset 2',
        borderColor: 'rgb(13, 184, 42)',
        borderWidth: 1,
        fill: false,
        data: showDataScond,
        yAxisID: 'y1',
      },
    ],
    options: {
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
        },
      },
    },
  };

  const options = {
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
    setLabels([]);
    data.forEach(e => setLabels(prev => [...prev, e.date]));
    data.forEach(e => setDataRoas(prev => [...prev, e.roas]));
    data.forEach(e => setDataCost(prev => [...prev, e.cost]));
    data.forEach(e => setDataImp(prev => [...prev, e.imp]));
    data.forEach(e => setDataClick(prev => [...prev, e.click]));
    data.forEach(e => setDataConv(prev => [...prev, e.conv]));
    data.forEach(e => setDataConvValue(prev => [...prev, e.convValue]));
  }, [data]);

  useEffect(() => {
    setShowData(dataRoas);
    setShowDataSecond(dataCost);
  }, [dataRoas, dataCost]);

  const onChangeSelectFirst = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case 'roas':
        return setShowData(dataRoas);
      case 'cost':
        return setShowData(dataCost);
      case 'imp':
        return setShowData(dataImp);
      case 'click':
        return setShowData(dataClick);
      case 'conv':
        return setShowData(dataConv);
      case 'convValue':
        return setShowData(dataConvValue);
      default:
        break;
    }
  };

  const onChangeSelectSecond = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
      case 'roas':
        return setShowDataSecond(dataRoas);
      case 'cost':
        return setShowDataSecond(dataCost);
      case 'imp':
        return setShowDataSecond(dataImp);
      case 'click':
        return setShowDataSecond(dataClick);
      case 'conv':
        return setShowDataSecond(dataConv);
      case 'convValue':
        return setShowDataSecond(dataConvValue);
      default:
        break;
    }
  };

  return (
    <>
      <select onChange={onChangeSelectFirst} defaultValue="roas">
        <option value="roas">ROAS</option>
        <option value="cost">광고비</option>
        <option value="imp">노출수</option>
        <option value="click">클릭수</option>
        <option value="conv">전환수</option>
        <option value="convValue">매출</option>
      </select>
      <select onChange={onChangeSelectSecond} defaultValue="cost">
        <option value="roas">ROAS</option>
        <option value="cost">광고비</option>
        <option value="imp">노출수</option>
        <option value="click">클릭수</option>
        <option value="conv">전환수</option>
        <option value="convValue">매출</option>
      </select>
      <Chart type="bar" data={dataSet} options={options} />
    </>
  );
}
