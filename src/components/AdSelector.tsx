// @flow
import * as React from 'react';
import { AdsStatus } from '../repository/adRepository.local';
import { useAdsStatusState } from '../store/ad.recoil';

export function AdSelector() {
  const [status, setStatus] = useAdsStatusState();

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    if (value) setStatus(value as AdsStatus);
  };

  return (
    <select onChange={handleChange} value={status}>
      <option value="all">전체 광고</option>
      <option value="active">진행중</option>
      <option value="ended">중단됨</option>
    </select>
  );
}
