// @flow
import dayjs from 'dayjs';
import * as React from 'react';
import styled from 'styled-components';
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
    <S.CardList>
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
          <S.Card key={id}>
            <header>{`${convertAdType(adType)}_${title}`}</header>
            <ul>
              <hr />
              <li>
                <span>상태</span>
                <span>{status === 'active' ? '진행중' : '종료'}</span>
              </li>
              <hr />
              <li>
                <span>광고 생성일</span>
                <span>
                  {dayjs(startDate).format('YYYY-MM-DD')}
                  {endDate ? `(${dayjs(endDate).format('YYYY-MM-DD')})` : ''}
                </span>
              </li>
              <hr />
              <li>
                <span>일 희망 예산</span>
                <span>{Math.round(budget / 10000).toLocaleString()}만원</span>
              </li>
              <hr />
              <li>
                <span>광고 수익률</span>
                <span>{roas}%</span>
              </li>
              <hr />
              <li>
                <span>매출</span>
                <span>
                  {Math.round(convValue / 10000).toLocaleString()}만원
                </span>
              </li>
              <hr />
              <li>
                <span>광고 비용</span>
                <span>{Math.round(cost / 10000).toLocaleString()}만원</span>
              </li>
              <hr />
            </ul>
            <button>수정하기</button>
          </S.Card>
        )
      )}
    </S.CardList>
  );
}

const S = {
  CardList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  `,

  Card: styled.article`
    border-radius: 1rem;
    padding: 2rem;
    border-style: solid;
    border-width: 0.1rem;
    width: 30.5rem;
    height: 42rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    header {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 1.875rem;
    }

    li {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.4rem;
      display: flex;
      gap: 1rem;

      span:nth-of-type(1) {
        color: #94a2ad;
        width: 30%;
      }

      span:nth-of-type(2) {
        width: 70%;
      }

      hr {
        width: 100%;
        border: 0.1rem solid #edeff1;
      }
    }

    button {
      all: unset;
      width: 5.2rem;
      height: 1.6rem;
      border-radius: 1rem;
      border-style: solid;
      border-width: 0.1rem;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  `,
};
