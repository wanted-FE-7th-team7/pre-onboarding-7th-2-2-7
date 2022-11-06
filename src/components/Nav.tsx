import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

function Nav({ text }: Props) {
  return <S.Nav>{text}</S.Nav>;
}

const S = {
  Nav: styled.nav`
    background-color: green;
    width: 100%;
    height: 4rem;
  `,
};

export default Nav;
