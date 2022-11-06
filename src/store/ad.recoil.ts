import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import {
  Ad,
  AdsStatus,
  LocalAdRepository,
} from '../repository/adRepository.local';
import { LocalAdService } from '../services/adService.local';

const adRepository = new LocalAdRepository();
const adService = new LocalAdService(adRepository);

const adsState = atom<Ad[]>({
  key: 'adsState',
  default: selector<Ad[]>({
    key: 'adsState/init',
    get: async () => await adService.getAds(),
  }),
});

const adsStatusState = atom<AdsStatus>({
  key: 'adFilterState',
  default: 'all',
});

const filteredAdsState = selector<Ad[]>({
  key: 'filteredAdsState',
  get: ({ get }) => {
    const ads = get(adsState);
    const status = get(adsStatusState);

    return status === 'all' ? ads : ads.filter(ad => ad.status === status);
  },
});

export const useAdsStatusState = () => {
  return useRecoilState(adsStatusState);
};

export const useFilteredAdsValue = () => {
  return useRecoilValue(filteredAdsState);
};
