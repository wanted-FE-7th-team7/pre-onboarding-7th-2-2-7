import { atom } from 'recoil';
import report from '../json/trend-data-set.json';

export const dataSelect = atom({
  key: 'dataSelect',
  default: report.report.daily,
});
