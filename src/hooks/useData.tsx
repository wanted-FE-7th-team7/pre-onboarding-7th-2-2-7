import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { dataSelect } from '../selects/dataSelect';
import { getFormatDate } from '../utils/getFormatDate';

export interface Data {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

const initialValue = [
  {
    imp: 0,
    click: 0,
    cost: 0,
    conv: 0,
    convValue: 0,
    ctr: 0,
    cvr: 0,
    cpc: 0,
    cpa: 0,
    roas: 0,
    date: '',
  },
];

interface Props {
  startDate: Date;
  endDate: Date;
}

const useData = ({ startDate, endDate }: Props) => {
  const [selectedData, setSelectedData] = useState<Data[]>(initialValue);
  const [data] = useRecoilState(dataSelect);

  const startIdx = data.findIndex(e => e.date === getFormatDate(startDate));
  const endIdx = data.findIndex(e => e.date === getFormatDate(endDate));

  useEffect(() => {
    setSelectedData(data.slice(startIdx, endIdx + 1));
  }, [data, startIdx, endIdx]);

  return { selectedData };
};

export default useData;
