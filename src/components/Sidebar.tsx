import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItem from './UIs/SidebarItem';

function Sidebar() {
  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;

  const menus = [
    { name: '대시보드', path: '/' },
    { name: '광고 관리', path: '/admin' },
  ];

  return (
    <S.Sidebar className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false} // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        );
      })}
    </S.Sidebar>
  );
}

const S = {
  Sidebar: styled.div`
    width: 15rem;
    height: 100vh;
    padding: 1rem;
  `,
};

export default Sidebar;