import React from 'react';
import styled from 'styled-components';

function Logo() {
  return <S.Logo>LEVER</S.Logo>;
}

const S = {
  Logo: styled.div`
    height: 10rem;
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 3rem;
  `,
};

export default Logo;
