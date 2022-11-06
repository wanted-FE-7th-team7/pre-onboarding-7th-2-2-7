import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { RouteType } from '../utils/routes';

interface Props {
  routes: RouteType[];
}

function Routers({ routes }: Props) {
  return (
    <>
      <Link to="/">홈</Link>
      <br />
      <Link to="/ad-management">광고</Link>
      <Routes>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </>
  );
}

export default Routers;
