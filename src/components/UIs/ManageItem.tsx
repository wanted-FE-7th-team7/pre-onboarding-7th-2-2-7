import React from 'react';
import styled from 'styled-components';

interface Props {
  adType: string;
  title?: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: any;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  };
}

const convertStatus = {
  active: '진행중',
  ended: '종료',
};

function ManageItem({
  title,
  budget,
  status,
  startDate,
  endDate,
  report,
  adType,
}: Props) {
  return (
    <S.ManageItem>
      <div className="item-title">{title}</div>
      <div className="item-body">
        <S.ManageItemContent>
          <S.ContentTitle>상태</S.ContentTitle>
          <S.Content>{status}</S.Content>
        </S.ManageItemContent>
        <S.ManageItemContent>
          <S.ContentTitle>광고 생성일</S.ContentTitle>
          <S.Content>{startDate.slice(0, 10)}</S.Content>
        </S.ManageItemContent>
        <S.ManageItemContent>
          <S.ContentTitle>일 희망 예산</S.ContentTitle>
          <S.Content>{budget / 10000}만원</S.Content>
        </S.ManageItemContent>
        <S.ManageItemContent>
          <S.ContentTitle>광고 수익률</S.ContentTitle>
          <S.Content>{report.roas}%</S.Content>
        </S.ManageItemContent>
        <S.ManageItemContent>
          <S.ContentTitle>매출</S.ContentTitle>
          <S.Content>{Math.floor(report.convValue / 100000)}만원</S.Content>
        </S.ManageItemContent>
        <S.ManageItemContent>
          <S.ContentTitle>광고 비용</S.ContentTitle>
          <S.Content>{Math.floor(report.cost / 100000)}만원</S.Content>
        </S.ManageItemContent>
      </div>
      <button className="modify-btn">수정하기</button>
    </S.ManageItem>
  );
}

const S = {
  ManageItem: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 305px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid #586cf5;

    margin: 1rem;
    padding: 1rem;

    .item-title {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.9rem;
      color: #3a474e;
    }

    .item-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .modify-btn {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #3a474e;

      width: 9.2rem;
      height: 4rem;

      background: #ffffff;

      border: 1px solid #d1d8dc;
      border-radius: 10px;
    }
  `,

  ManageItemContent: styled.div`
    display: flex;
    justify-content: space-between;
    height: 2rem;
  `,

  ContentTitle: styled.div`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 14px;
    color: #94a2ad;
  `,

  Content: styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 14px;

    color: #3a474e;
  `,
};

export default ManageItem;
