import {
  Ad,
  AdsStatus,
  LocalAdRepository,
} from '../repository/adRepository.local';

export interface AdService {
  getAds: (status?: AdsStatus) => Promise<Ad[]>;
}

export class LocalAdService implements AdService {
  private adRepository;

  constructor(adRepository: LocalAdRepository) {
    this.adRepository = adRepository;
  }

  getAds(status?: AdsStatus) {
    return this.adRepository.getAds(status);
  }
}
