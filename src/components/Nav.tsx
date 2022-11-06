import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <S.Nav>
      <div className="user-info">원티드 님</div>
    </S.Nav>
  );
}

const S = {
  Nav: styled.nav`
    display: flex;
    align-items: center;
    background-color: #f6f7f8;
    width: 100%;
    min-height: 5rem;
    padding-right: 3rem;

    .user-info {
      font-size: 2rem;
      margin-left: auto;
    }
  `,
};

export default Nav;
