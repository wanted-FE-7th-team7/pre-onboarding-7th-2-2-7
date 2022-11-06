import dayjs from 'dayjs';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import {
  LocalTrendRepository,
  Trend,
} from '../repository/trendRepository.local';

import { LocalTrendService } from '../services/trendService.local';

const trendRepository = new LocalTrendRepository();
const trendService = new LocalTrendService(trendRepository);

const trendsState = atom<Trend[]>({
  key: 'trendsState',
  default: selector<Trend[]>({
    key: 'trendsState/init',
    get: async () => await trendService.getTrends(),
  }),
});

const trendsDateRangeState = atom<{ start: string; end: string }>({
  key: 'trendsDateRangeState',
  default: {
    start: dayjs('2022-02-01').format('YYYY-MM-DD'),
    end: dayjs('2022-02-05').format('YYYY-MM-DD'),
  },
});

const trendsSelectsState = atom<[string, string]>({
  key: 'trendsSelectsState',
  default: ['roas', ''],
});

const filteredTrendsState = selector<Trend[]>({
  key: 'filteredTrendsState',
  get: ({ get }) => {
    const { start, end } = get(trendsDateRangeState);
    return get(trendsState).filter(
      ({ date }) =>
        new Date(start) <= new Date(date) && new Date(date) <= new Date(end)
    );
  },
});

const comparedTrendsState = selector<{
  before: Trend[];
  current: Trend[];
}>({
  key: 'comparedTrendsState',
  get: ({ get }) => {
    const { start, end } = get(trendsDateRangeState);

    const gap = dayjs(end).diff(start, 'day', true) + 1;

    const before = get(trendsState).filter(
      ({ date }) =>
        new Date(dayjs(start).subtract(gap, 'day').toString()) <=
          new Date(dayjs(date).set('hour', 0).toString()) &&
        new Date(dayjs(date).set('hour', 0).toString()) <=
          new Date(dayjs(end).subtract(gap, 'day').toString())
    );

    const current = get(trendsState).filter(
      ({ date }) =>
        new Date(start) <= new Date(date) && new Date(date) <= new Date(end)
    );

    return { before, current };
  },
});

export const useTrendsDateRangeState = () => {
  return useRecoilState(trendsDateRangeState);
};

export const useFilteredTrendsValue = () => {
  return useRecoilValue(filteredTrendsState);
};

export const useComparedTrendsState = () => {
  return useRecoilValue(comparedTrendsState);
};

export const useTrendsSelectsState = () => {
  return useRecoilState(trendsSelectsState);
};
