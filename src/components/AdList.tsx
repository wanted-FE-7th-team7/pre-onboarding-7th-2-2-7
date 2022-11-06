// @flow
import * as React from 'react';
import { useFilteredAdsValue } from '../store/ad.recoil';

const convertAdType = (adType: string) => {
  switch (adType) {
    case 'web':
      return '웹광고';
    case 'app':
      return '앱광고';
    default:
      return new Error('존재하지 않는 타입입니다.');
  }
};

export function AdList() {
  const ads = useFilteredAdsValue();

  return (
    <div>
      {ads.map(
        ({
          id,
          title,
          adType,
          budget,
          status,
          endDate,
          startDate,
          report: { cost, convValue, roas },
        }) => (
          <article key={id}>
            <header>{`${convertAdType(adType)}_${title}`}</header>
            <ul>
              <li>
                <span>상태</span>
                <span>{status}</span>
              </li>
              <li>
                <span>광고 생성일</span>
                <span>
                  {startDate} {endDate ? `(${endDate})` : ''}
                </span>
              </li>
              <li>
                <span>일 희망 예산</span>
                <span>{budget.toLocaleString()}</span>
              </li>
              <li>
                <span>광고 수익률</span>
                <span>{roas}</span>
              </li>
              <li>
                <span>매출</span>
                <span>{convValue.toLocaleString()}</span>
              </li>
              <li>
                <span>광고 비용</span>
                <span>{cost.toLocaleString()}</span>
              </li>
            </ul>
            <button>수정하기</button>
          </article>
        )
      )}
    </div>
  );
}
