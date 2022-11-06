// @flow
import * as React from 'react';
import styled from 'styled-components';
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
    <S.Select onChange={handleChange} value={status}>
      <option value="all">전체 광고</option>
      <option value="active">진행중</option>
      <option value="ended">중단됨</option>
    </S.Select>
  );
}

const S = {
  Select: styled.select`
    all: unset;
    padding: 1rem;
    border-radius: 1rem;
    border-width: 0.1rem;
    border-style: solid;
    cursor: pointer;
  `,
};
