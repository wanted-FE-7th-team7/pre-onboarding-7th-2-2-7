import data from '../data/trend-data-set.json';
import { lazyFunction } from '../utils/lazyFunction';

export interface Trend {
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

export class LocalTrendRepository {
  private data;

  constructor() {
    this.data = data;
  }

  getTrends() {
    return lazyFunction(() => this.data.report.daily, 500);
  }
}
