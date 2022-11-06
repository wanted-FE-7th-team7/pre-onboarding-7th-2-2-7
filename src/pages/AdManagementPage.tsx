import React from 'react';
import styled from 'styled-components';
import { AdList } from '../components/AdList';
import { AdSelector } from '../components/AdSelector';

function AdManagementPage() {
  return (
    <main>
      <S.Title>광고관리</S.Title>
      <S.Content>
        <S.SubHeader>
          <AdSelector />
          <S.Button>광고 만들기</S.Button>
        </S.SubHeader>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AdList />
        </React.Suspense>
      </S.Content>
    </main>
  );
}

const S = {
  Title: styled.h1`
    margin: 4.1rem;
    font-weight: 900;
    font-size: 2.6rem;
  `,

  Button: styled.button`
    all: unset;
    color: white;
    background-color: #586cf5;

    padding: 1rem;
    border-radius: 1rem;
  `,

  Content: styled.section`
    background-color: white;
    border-radius: 1rem;
    margin: 4.1rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,

  SubHeader: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export default AdManagementPage;
