import data from '../data/ad-list-data-set.json';
import { lazyFunction } from '../utils/lazyFunction';

export interface Ad {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  };
}

export type AdsStatus = 'all' | 'active' | 'ended';

export class LocalAdRepository {
  private data;

  constructor() {
    this.data = data;
  }

  getAds(status: AdsStatus = 'all') {
    return status === 'all'
      ? lazyFunction(() => this.data.ads, 500)
      : lazyFunction(
          () => this.data.ads.filter(ad => ad.status === status),
          500
        );
  }

  getCount() {
    return this.data.count;
  }
}
