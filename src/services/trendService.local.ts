import {
  LocalTrendRepository,
  Trend,
} from '../repository/trendRepository.local';

export interface TrendService {
  getTrends: () => Promise<Trend[]>;
}

export class LocalTrendService implements TrendService {
  private trendRepository;

  constructor(trendRepository: LocalTrendRepository) {
    this.trendRepository = trendRepository;
  }

  getTrends() {
    return this.trendRepository.getTrends();
  }
}
