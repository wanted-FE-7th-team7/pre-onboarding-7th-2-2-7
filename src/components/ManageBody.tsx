import React from 'react';
import styled from 'styled-components';
import ManageItem from './UIs/ManageItem';
import { adList } from '../db/ad-list-data-set';

interface Manage {
  id: number;
  adType: string;
  title: string;
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

function ManageBody() {
  return (
    <S.ManageBody>
      {adList.ads.map(
        ({
          id,
          title,
          budget,
          status,
          startDate,
          endDate,
          report,
          adType,
        }: Manage) => (
          <ManageItem
            key={id}
            title={title}
            budget={budget}
            status={status}
            startDate={startDate}
            endDate={endDate}
            report={report}
            adType={adType}
          />
        )
      )}
    </S.ManageBody>
  );
}

const S = {
  ManageBody: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
    padding: 1rem;
  `,
};

export default ManageBody;
