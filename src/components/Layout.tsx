import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';
import Routers from './Routers';
import logo from '../images/Lever_BI 1.png';
import guide from '../images/guide.png';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import ring from '../images/ring.png';
import setting from '../images/setting.png';
import MY from '../images/MY.png';

function Layout() {
  const location = useLocation();
  return (
    <StyledDiv>
      <div className="nav">
        <img className="logo" src={logo} alt="logo" />
        <hr className="HR" />
        <div>
          <div className="service-title">서비스</div>
          <select className="madup-select">
            <option>매드업</option>
            <option>추가하기</option>
          </select>
        </div>
        <nav className="links">
          <div>광고 센터</div>
          <Link
            className={`router ${location.pathname === '/' ? 'active' : ''}`}
            to="/"
          >
            대시보드
          </Link>
          <Link
            className={`router ${
              location.pathname === '/ad-management' ? 'active' : ''
            }`}
            to="/ad-management"
          >
            광고관리
          </Link>
        </nav>
        <img src={guide} alt="guide" />
      </div>
      <div className="main">
        <div className="menu">
          <div />
          <div className="icons">
            <img src={ring} alt="ring" />
            <img src={setting} alt="setting" />
            <img src={MY} alt="MY" />
          </div>
        </div>
        <Routers routes={routes} />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  & {
    .logo {
      width: 12.4rem;
      height: 3rem;
    }

    display: flex;
    width: 100vw;
    height: 100vh;

    .HR {
      width: 24rem;
    }

    .madup-select {
      all: unset;
      width: 24rem;
      height: 6rem;
      border-radius: 1rem;
      border-style: solid;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 700;
      padding-left: 1.3rem;
      cursor: pointer;
    }

    .service-title {
      margin: 1.3rem;
      width: 4.8rem;
      height: 1.4rem;
      font-size: 1.2rem;
      font-weight: 700;
    }

    div.nav {
      display: flex;
      flex-direction: column;
      padding: 4rem;
      width: 32rem;
      gap: 5rem;
    }

    .links > div {
      margin: 1.3rem;
      width: 4.8rem;
      height: 1.4rem;
      font-size: 1.2rem;
      font-weight: 700;
    }

    a.router {
      all: unset;
      width: 24rem;
      height: 6rem;
      font-size: 1.6rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: left;
      align-items: center;
      border-radius: 1rem;
      padding-left: 2rem;
    }

    a.active {
      background-color: #edeff1;
      color: #586cf5;
    }

    div.main {
      background-color: #f6f7f8;
      width: 100%;

      .menu {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
      }

      .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        img {
          cursor: pointer;
        }
      }
    }

    nav.links {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Layout;
